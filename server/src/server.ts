import express from 'express';

const app =express();
app.post('/users', (request, response) => {
   const users = [
       {name: 'matheus',age: 18},
       {name: 'matheus',age :19},
   ];
return response.json(users);
   
});
app.listen(3333);