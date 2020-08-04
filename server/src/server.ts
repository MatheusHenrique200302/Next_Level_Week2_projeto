import express from 'express';
//GET: buscar ou listar uma informação
//POST: criar alguma nova informação
//PUT: atualizar uma informação
//DELETE: Deletar uma informação existente

//Corpo (Request Body): Dados para criação ou alteração de um registro
//Route params :identificar qual recurso quer atualizar ou deletar
//Query Params: Paginação,filtros,ordenação
const app =express();
app.use(express.json());
app.get('/', (request, response) => {

return response.json({message: "Hello World"});
   
});
app.listen(3333);