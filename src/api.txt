Развернуть окружение:
docker-compose up -d --build

http://localhost:8000/admin/ - админка django
http://localhost:5555/ - страница flower для celery


Регистрация (с письмом активации на указанную почту):
    URL: http://localhost:8000/auth/users/
    Method: POST
    Request body:
        {
          "email": "user@example.com",
          "username": "string",
          "password": "string"
        }

Активация аккаунта:
    URL: http://localhost:8000/auth/users/activation/
    Метод: POST
    Request body:
        {
          "uid": "string",
          "token": "string"
        }

Сброс пароля:
    http://localhost:8000/auth/users/reset_password/
    Method: POST
    Request body:
        {
          "email": "user@example.com"
        }


Авторизация по JWT:
    URL: http://localhost:8000/auth/token/
    Метод: POST
    Request body:
        {
          "username": "string",
          "password": "string"
        }