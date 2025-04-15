const express = require("express");
const router = express.Router();

const pedidosController = require("../controllers/pedidosController");

// Página do formulário de pedidos (GET)
router.get("/pedidos", (req, res) => {
  res.sendFile("pedidos.html", { root: "public" });
});

router.get("/home", (req, res) => {
  res.sendFile("pizzaria.html", { root: "public" });
});

// Criar um novo pedido (POST)
router.post("/enviar-pedido", pedidosController.criarPedido);

// Rota alternativa para criar pedido (opcional, pode remover se não usar)
router.post("/criar", pedidosController.criarPedido);

module.exports = router;
