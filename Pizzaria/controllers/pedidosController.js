// controllers/pedidoController.js
const db = require("../config/db");

exports.criarPedido = (req, res) => {
  const {
    nome_cliente,
    telefone,
    endereco,
    pizza,
    tamanho,
    adicionais,
    sabor_id,
  } = req.body;

  if (
    !nome_cliente ||
    !telefone ||
    !endereco ||
    !pizza ||
    !tamanho ||
    !sabor_id
  ) {
    return res.status(400).json({ erro: "Campos obrigatórios faltando!" });
  }

  const sql =
    "INSERT INTO pedidos (nome_cliente, telefone, endereco, pizza, tamanho, adicionais, sabor_id) VALUES (?, ?, ?, ?, ?, ?, ?)";
  const valores = [
    nome_cliente,
    telefone,
    endereco,
    pizza,
    tamanho,
    adicionais,
    sabor_id,
  ];

  db.query(sql, valores, (err, resultado) => {
    if (err) {
      console.error("Erro ao inserir pedido:", err);
      return res.status(500).json({ erro: "Erro ao salvar o pedido" });
    }

    res.status(201).json({
      mensagem: "Pedido realizado com sucesso!",
      pedidoId: resultado.insertId,
    });

    // Aqui depois vamos integrar o envio pro WhatsApp 🔜
  });
};
