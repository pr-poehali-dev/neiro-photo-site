import json
import os
import urllib.request
import urllib.parse
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Отправка заявки на фотосъемку в Telegram соответствующему фотографу
    Args: event - dict с httpMethod, body (name, phone, email, photographer, package, date, time, comment)
          context - object с request_id, function_name
    Returns: HTTP response dict
    '''
    method: str = event.get('httpMethod', 'POST')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    try:
        body_data = json.loads(event.get('body', '{}'))
        
        name = body_data.get('name', '')
        phone = body_data.get('phone', '')
        email = body_data.get('email', '')
        photographer = body_data.get('photographer', '')
        package = body_data.get('package', '')
        date = body_data.get('date', '')
        time = body_data.get('time', '')
        comment = body_data.get('comment', '')
        
        if not all([name, phone, photographer]):
            return {
                'statusCode': 400,
                'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
                'body': json.dumps({'error': 'Missing required fields'})
            }
        
        bot_token = os.environ.get('LIVEAIPHOTO_BOT')
        chat_id = os.environ.get('TELEGRAM_CHAT_ID')
        
        if photographer == 'maria':
            photographer_name = 'Марии'
        elif photographer == 'alexandra':
            photographer_name = 'Александры'
        else:
            return {
                'statusCode': 400,
                'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
                'body': json.dumps({'error': 'Invalid photographer'})
            }
        
        if not bot_token or not chat_id:
            return {
                'statusCode': 500,
                'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
                'body': json.dumps({'error': 'Telegram credentials not configured'})
            }
        
        message = f"""🎯 Новая заявка для {photographer_name}!

👤 Имя: {name}
📱 Телефон: {phone}"""
        
        if email:
            message += f"\n📧 Email: {email}"
        if package:
            package_names = {
                'trial': 'Пробная (3 фото, 1 образ) — 1 000 ₽',
                'standard': 'Стандарт (10 фото, 2-3 образа) — 2 500 ₽' if photographer == 'alexandra' else 'Стандарт (1 час, 15 фото в ретуши) — 4 000 ₽',
                'premium': 'Премиум (20 фото, 5 образов) — 3 500 ₽' if photographer == 'alexandra' else 'Премиум (2 часа, 30 фото в ретуши) — 7 500 ₽',
                'mini': 'Мини (30 мин, 7 фото в ретуши) — 2 500 ₽',
                'other': 'Другое'
            }
            message += f"\n📦 Пакет: {package_names.get(package, package)}"
        if date:
            message += f"\n📅 Дата: {date}"
        if time:
            message += f"\n⏰ Время: {time}"
        if comment:
            message += f"\n💬 Комментарий: {comment}"
        
        telegram_url = f"https://api.telegram.org/bot{bot_token}/sendMessage"
        data = urllib.parse.urlencode({
            'chat_id': chat_id,
            'text': message,
            'parse_mode': 'HTML'
        }).encode()
        
        req = urllib.request.Request(telegram_url, data=data)
        with urllib.request.urlopen(req) as response:
            telegram_response = json.loads(response.read().decode())
        
        if not telegram_response.get('ok'):
            return {
                'statusCode': 500,
                'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
                'body': json.dumps({'error': 'Failed to send telegram message'})
            }
        
        return {
            'statusCode': 200,
            'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
            'body': json.dumps({'success': True, 'message': 'Заявка успешно отправлена'})
        }
        
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
            'body': json.dumps({'error': str(e)})
        }