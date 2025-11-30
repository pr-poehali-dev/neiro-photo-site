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
    Note: Для работы бота пользователи должны сначала написать боту /start в Telegram
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
        
        if photographer == 'maria':
            photographer_name = 'Марии'
            chat_id = '1692264245'
        elif photographer == 'alexandra':
            photographer_name = 'Александры'
            chat_id = '6078882546'
        else:
            return {
                'statusCode': 400,
                'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
                'body': json.dumps({'error': 'Invalid photographer'})
            }
        
        if not bot_token:
            return {
                'statusCode': 500,
                'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
                'body': json.dumps({'error': 'Telegram bot token not configured'})
            }
        
        message = f"Новая заявка для {photographer_name}!\n\n"
        message += f"Имя: {name}\n"
        message += f"Телефон: {phone}\n"
        
        if email:
            message += f"Email: {email}\n"
        if package:
            package_names = {
                'trial': 'Пробная (3 фото, 1 образ) - 1 000 руб',
                'standard': 'Стандарт (10 фото, 2-3 образа) - 2 500 руб' if photographer == 'alexandra' else 'Стандарт (1 час, 15 фото в ретуши) - 4 000 руб',
                'premium': 'Премиум (20 фото, 5 образов) - 3 500 руб' if photographer == 'alexandra' else 'Премиум (2 часа, 30 фото в ретуши) - 7 500 руб',
                'group': 'Групповая (1 фото, 2 и более человек) - от 500 руб',
                'video': 'Короткое видео (до 30сек) - 500 руб',
                'mini': 'Мини (30 мин, 7 фото в ретуши) - 2 500 руб',
                'other': 'Другое'
            }
            message += f"Пакет: {package_names.get(package, package)}\n"
        if date:
            message += f"Дата: {date}\n"
        if time:
            message += f"Время: {time}\n"
        if comment:
            message += f"Комментарий: {comment}\n"
        
        telegram_url = f"https://api.telegram.org/bot{bot_token}/sendMessage"
        data = urllib.parse.urlencode({
            'chat_id': chat_id,
            'text': message
        }).encode()
        
        try:
            req = urllib.request.Request(telegram_url, data=data)
            with urllib.request.urlopen(req) as response:
                telegram_response = json.loads(response.read().decode())
            
            if not telegram_response.get('ok'):
                error_description = telegram_response.get('description', 'Unknown error')
                return {
                    'statusCode': 500,
                    'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
                    'body': json.dumps({
                        'error': 'Failed to send telegram message',
                        'details': error_description,
                        'fallback': 'Заявка сохранена, но не удалось отправить в Telegram'
                    })
                }
        except urllib.error.HTTPError as e:
            error_body = e.read().decode() if hasattr(e, 'read') else str(e)
            try:
                error_json = json.loads(error_body)
                error_description = error_json.get('description', error_body)
            except:
                error_description = error_body
            
            if e.code == 404 or 'not found' in error_description.lower():
                fallback_msg = f'{photographer_name} еще не активировала бота. Попросите ее найти @LiveAIphoto_bot в Telegram и нажать /start'
            else:
                fallback_msg = f'Ошибка Telegram: {error_description}'
            
            return {
                'statusCode': 500,
                'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
                'body': json.dumps({
                    'error': f'Telegram API error: {e.code}',
                    'details': error_description,
                    'fallback': fallback_msg
                })
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