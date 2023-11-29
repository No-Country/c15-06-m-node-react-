# c15-06-m-node-react-
E-commerce sustentable de alimentos: "EcoVida Store".  Nuestra página va destinada a aquellos consumidores que se preocupan tanto por el medio ambiente como por su alimentación, que no encuentran lugares donde vendan productos variados y con información fiable sobre lo que están consumiendo.

End point
###
POST http://localhost:3001/api/users 
{
    "name": "testprueba3",
    "email": "sulliTres@test.com",
    "password": "testTres"
}
###
PUT http://localhost:3001/api/users/:id

{
    "name": "Alejandro",
    "email": "alejandrtest@test.com",
    "password": "prueba123456"
}

###
GET  http://localhost:3001/api/users 

###
GET  http://localhost:3001/api/users/6564b0bfcaa418ca8e66fd44 HTTP/1.1
content-Type: application/json

###
GET  http://localhost:3001/api/product

###
POST http://localhost:3001/api/product 

{
    "name": "prueba chia",
    "description": "descripcion de la chia",
    "price": "25000"
}

###
GET  http://localhost:3001/api/product/:id
###
PUT  http://localhost:3001/api/product/:id

{
    "name": "PRUEBA",
    "description": "descripcion de la pRUEBA",
    "price": "25000"
}

🌐 URL backend: https://c15-06-m-node-react-production.up.railway.app/
Consultas
https://c15-06-m-node-react-production.up.railway.app/api y la ruta a consultar

