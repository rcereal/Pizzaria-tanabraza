const mysql = require("mysql2");
const { connect } = require("../routes/pizzaRoutes");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Banana20@",
  database: "pizzaria",
});

db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar no MySQL:", err);
    return;
  }
  console.log("🟢 Conectado ao MySQL!");
});

module.exports = db;
