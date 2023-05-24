const express = require("express");

const { v4: uuidv4 } = require("uuid");

const app = express();

// Essa função é necessária para o express conseguir receber parametros JSON
app.use(express.json());

const customers = [];

// Middleware
function verifyIfExistsAccountCPF(request, response, next) {
  // Middleware - roda antes de entrar na rota
    const { cpf } = request.headers;

  const customer = customers.find((customer) => customer.cpf === cpf);

  if (!customer) {
    return response.status(400).json({ error: "Customer not found" });
  }

  // Serve para passar o registro para dentro da rota
  request.customer = customer;

  // Função para seguir na rota
  return next();
}

app.post("/account", (request, response) => {
  const { cpf, name } = request.body;

  const customerAlreadyExists = customers.some(
    (customer) => customer.cpf === cpf
  );

  if (customerAlreadyExists) {
    return response.status(400).json({ error: "Customer already exists!" });
  }

  customers.push({
    cpf,
    name,
    id: uuidv4(),
    statement: [],
  });

  return response.status(201).send();
});

// Quando eu quero que todas as rotas a seguir tenham esse Middleware
// app.use(verifyIfExistsAccountCPF);

// Middleware precisa ser declarado antes do request e response, porém pode ter mais que um
app.get("/statement", verifyIfExistsAccountCPF, (request, response) => {
  const { customer } = request;

  return response.json(customer.statement);
});

app.put("/account/:id", (request, response) => {
  const { id } = request.params;
  console.log(id);
  return response.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"]);
});

app.patch("/account/:id", (request, response) => {
  return response.json(["Curso 7", "Curso 2", "Curso 3", "Curso 4"]);
});

app.delete("/account/:id", (request, response) => {
  return response.json(["Curso 2", "Curso 3", "Curso 4"]);
});

app.listen(3333);
