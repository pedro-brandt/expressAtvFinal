import express, { request, response } from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

//app.listen(3000);

const mockUsuarios = [
    {id: 1, Nome: "pedro", apelido: "Pedro"},
    {id: 2, Nome: "luiz", apelido: "Luiz"},
    {id: 3, Nome: "maria", apelido: "Ma"},
]

app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`)});

app.get("/", (request, response) => {
    response.status(201).send({msg: "Olá, beleza? "});
    })

app.get("/api/usuarios", (request, response) => {
    response.send(mockUsuarios);
})

app.get("/api/usuarios/:id", (request, response) => {
    console.log(request.params);
    const parsedId = parseInt(request.params.id);
    if (isNaN(parsedId)) 
        return response.status(400).send({msg: "Pedido negado"});

    const findUsuario = mockUsuarios.find((usuario) => usuario.id === parsedId );
    if (!findUsuario) return response.status(404);
    return response.send(findUsers);
})

app.get("/api/produtos", (request, response) => {
    response.send([{id: 11, mome: "pera", preco: 2.00}]);
})
    



//localhost:3000
//localhost:3000/usuarios
//localhost:3000/produtos