const express = require("express");
const router = express.Router();

const pedidosController = require("../controllers/pedidosController");

// // Rota para listar pizzas (se quiser manter)
// router.get("/", pedidosController.listarPizzas);

// Rota para criar pedido
router.post("/criar", pedidosController.criarPedido);

// Você pode adicionar outras rotas como:
// router.get('/:id', pedidosController.verPedido);
// router.put('/:id', pedidosController.atualizarPedido);

module.exports = router;
