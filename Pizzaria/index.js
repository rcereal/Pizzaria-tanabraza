const express = require("express");
const cors = require("cors");
const app = express();
const porta = 3000;

const pizzaRoutes = require("./routes/pizzaRoutes");
const db = require("./config/db");

// Middlewares
app.use(cors());
app.use(express.json());

// Conectar ao MySQL
db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar no MySQL:", err);
  } else {
    console.log("Conectado ao MySQL ✅");
  }
});

// Rotas
app.use("/api/pizzas", pizzaRoutes); // Ex: /api/pizzas/criar

// Iniciar servidor
app.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost:${porta}`);
});
