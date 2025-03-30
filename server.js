const express = require("express");
const app = express();
const port = 3000;

// Rota raiz
app.get("/", (req, res) => {
    res.send("MINHA PRIMEIRA API, ALELUIA!");
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

const filmes = [
    { id: 1, titulo: "Interestelar", descricao: "Ficção científica sobre exploração espacial." },
    { id: 2, titulo: "O Poderoso Chefão", descricao: "Clássico do cinema sobre a máfia italiana." },
    { id: 3, titulo: "Matrix", descricao: "Um programador descobre a verdade sobre a realidade." }
];

// Rota para listar os filmes
app.get("/filmes", (req, res) => {
    res.json(filmes);
});

