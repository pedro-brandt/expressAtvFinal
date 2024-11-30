import express, { request, response } from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

//app.listen(3000);

app.get('/', (request, response) => {
    response.status(201).send({msg: "Olá, beleza? "})
    })

app.get('/api/usuarios', (request, response) => {
    response.send([
        {id: 1, Nome: "pedro", apelido: "Pedro"},
        {id: 2, Nome: "luiz", apelido: "Luiz"},
        {id: 3, Nome: "maria", apelido: "Ma"}
    ])
})

app.get('/api/produtos', (request, response) => {
    response.send([{id: 11, mome: "pera", preco: 2.00}])
})
    
app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`)})


//localhost:3000
//localhost:3000/usuarios
//localhost:3000/produtos