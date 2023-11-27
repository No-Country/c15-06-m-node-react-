# c15-06-m-node-react-
E-commerce sustentable de alimentos: "EcoVida Store".  Nuestra página va destinada a aquellos consumidores que se preocupan tanto por el medio ambiente como por su alimentación, que no encuentran lugares donde vendan productos variados y con información fiable sobre lo que están consumiendo.

End point
###
POST http://localhost:3001/api/users HTTP/1.1
content-Type: application/json

{
    "name": "testprueba3",
    "email": "sulliTres@test.com",
    "password": "testTres"
}
###
PUT http://localhost:3001/api/users/6564b0bfcaa418ca8e66fd44 HTTP/1.1
content-Type: application/json

{
    "name": "Alejandro",
    "email": "alejandrtest@test.com",
    "password": "prueba123456"
}

###
GET  http://localhost:3001/api/users HTTP/1.1
content-Type: application/json

###
GET  http://localhost:3001/api/users/6564b0bfcaa418ca8e66fd44 HTTP/1.1
content-Type: application/json

###

GET  http://localhost:3001/api/product HTTP/1.1
content-Type: application/json

###
POST http://localhost:3001/api/product HTTP/1.1
content-Type: application/json

{
    "name": "prueba chia",
    "description": "descripcion de la chia",
    "price": "25000"
}

###
GET  http://localhost:3001/api/product/656311e28daa0d735bf476b1 HTTP/1.1
content-Type: application/json

###
PUT  http://localhost:3001/api/product/656311e28daa0d735bf476b1 HTTP/1.1
content-Type: application/json

{
    "name": "PRUEBA",
    "description": "descripcion de la pRUEBA",
    "price": "25000"
}
