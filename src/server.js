require("dotenv").config();

const express = require("express");
const pool = require("./config/database");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", async (req, res) => {
    try {
        const resultado = await pool.query("SELECT NOW()");
        res.json({
            mensagem: "API rodando!",
            horarioBanco: resultado.rows[0].now,
        });
    } catch (erro) {
        console.error(erro);
        res.status(500).json({ erro: "Erro ao conectar ao banco de dados." });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});