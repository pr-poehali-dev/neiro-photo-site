import json
import os
import urllib.request
import urllib.parse
from typing import Dict, Any, List

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Отправка заявки на фотосъемку в Telegram фотографу и дублирование на общий чат
    Args: event - dict с httpMethod, body (name, phone, email, photographer, package, date, time, comment)
          context - object с request_id, function_name
    Returns: HTTP response dict
    Note: Заявка отправляется выбранному фотографу + всегда дублируется на TELEGRAM_CHAT_ID
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
        general_chat_id = os.environ.get('TELEGRAM_CHAT_ID')
        
        if not bot_token:
            return {
                'statusCode': 500,
                'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
                'body': json.dumps({'error': 'Telegram bot token not configured'})
            }
        
        if photographer == 'maria':
            photographer_name = 'Марии'
            photographer_chat_id = os.environ.get('TELEGRAM_MARIYA_CHAT_ID', '1324179163')
        elif photographer == 'alexandra':
            photographer_name = 'Александры'
            photographer_chat_id = os.environ.get('TELEGRAM_ALEXANDRA_CHAT_ID', '6078882546')
        else:
            return {
                'statusCode': 400,
                'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
                'body': json.dumps({'error': 'Invalid photographer'})
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
                'gruppovaya': 'Групповая (2 и более человек) - от 500 руб',
                'korotkoe video': 'Короткое видео (до 30сек) - 500 руб',
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
        
        chat_ids_to_send: List[str] = [photographer_chat_id]
        if general_chat_id and general_chat_id != photographer_chat_id:
            chat_ids_to_send.append(general_chat_id)
        
        telegram_url = f"https://api.telegram.org/bot{bot_token}/sendMessage"
        
        success_count = 0
        errors = []
        
        for chat_id in chat_ids_to_send:
            data = urllib.parse.urlencode({
                'chat_id': chat_id,
                'text': message
            }).encode()
            
            try:
                req = urllib.request.Request(telegram_url, data=data)
                with urllib.request.urlopen(req) as response:
                    telegram_response = json.loads(response.read().decode())
                
                if telegram_response.get('ok'):
                    success_count += 1
                    print(f"Success: Message sent to chat_id {chat_id}")
                else:
                    error_description = telegram_response.get('description', 'Unknown error')
                    errors.append(f"Chat {chat_id}: {error_description}")
                    print(f"Error: Failed to send to chat_id {chat_id}: {error_description}")
                    
            except urllib.error.HTTPError as e:
                error_body = e.read().decode() if hasattr(e, 'read') else str(e)
                try:
                    error_json = json.loads(error_body)
                    error_description = error_json.get('description', error_body)
                except (json.JSONDecodeError, KeyError):
                    error_description = error_body
                
                errors.append(f"Chat {chat_id}: HTTP {e.code} - {error_description}")
                print(f"HTTPError: Failed to send to chat_id {chat_id}: {e.code} - {error_description}")
            
            except Exception as e:
                errors.append(f"Chat {chat_id}: {str(e)}")
                print(f"Exception: Failed to send to chat_id {chat_id}: {str(e)}")
        
        if success_count == len(chat_ids_to_send):
            return {
                'statusCode': 200,
                'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
                'body': json.dumps({
                    'success': True, 
                    'message': 'Заявка успешно отправлена',
                    'sent_to': success_count
                })
            }
        elif success_count > 0:
            return {
                'statusCode': 207,
                'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
                'body': json.dumps({
                    'success': True,
                    'message': f'Заявка частично отправлена ({success_count}/{len(chat_ids_to_send)})',
                    'warnings': errors
                })
            }
        else:
            return {
                'statusCode': 500,
                'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
                'body': json.dumps({
                    'error': 'Failed to send to any recipient',
                    'details': errors,
                    'fallback': 'Не удалось отправить уведомление. Пожалуйста, свяжитесь напрямую с фотографом'
                })
            }
        
    except Exception as e:
        print(f"Unexpected error: {str(e)}")
        return {
            'statusCode': 500,
            'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
            'body': json.dumps({'error': str(e)})
        }