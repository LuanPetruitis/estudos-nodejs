const express = require("express");

const { v4: uuidv4 } = require("uuid");

const app = express();

// Essa função é necessária para o express conseguir receber parametros JSON
app.use(express.json());

const customers = [];

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

app.get("/statement", (request, response) => {
  const { cpf } = request.headers;

  const customer = customers.find((customer) => customer.cpf === cpf);

  if (!customer) {
    return response.status(400).json({ error: "Customer not found" });
  }

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
