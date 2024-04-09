# API

## endpoints

- register user

```sh
🐖 curl -X POST -H "Content-Type: application/json" -d '{"name":"Pepito Grillo","birthdate":"2000-01-01","email":"pepito@grillo.com","username":"pepitogrillo","password":"123qwq123"}' http://localhost:8080/users -v
```

- login user

```sh

curl -X POST -H "Content-Type: application/json" -d '{"username":"pepitogrillo","password":"123qwq123"}' http://localhost:8080/users/auth -v


```
- retrieve user

```
curl -X POST -H "Content-Type: application/json" -d '{"id":"pgsdduuv2c0"}' http://localhost:8080/users/auth -v

```
curl -X POST -H "Content-Type: application/json" -d '{"username":"pepitogrillo","password":"123qwq123"}' http://localhost:8080/users/logout -v
