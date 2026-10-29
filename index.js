require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

// Rota GET raiz
app.get('/', (req, res) => {
  res.json({ mensagem: 'Servidor rodando com sucesso!' });
});

// Rota POST /usuario
// Recebe no body: { nome, idade }
app.post('/usuario', (req, res) => {
  const { nome, idade } = req.body;

  if (!nome || !idade) {
    return res.status(400).json({ erro: 'Os campos nome e idade são obrigatórios.' });
  }

  res.status(201).json({
    mensagem: 'Usuário recebido com sucesso!',
    usuario: { nome, idade },
  });
});

// Rota POST /produto
// Recebe no body: { nome, preco, quantidade, categoria }
app.post('/produto', (req, res) => {
  const { nome, preco, quantidade, categoria } = req.body;

  if (!nome || preco === undefined || quantidade === undefined || !categoria) {
    return res.status(400).json({
      erro: 'Os campos nome, preco, quantidade e categoria são obrigatórios.',
    });
  }

  res.status(201).json({
    mensagem: 'Produto recebido com sucesso!',
    produto: { nome, preco, quantidade, categoria },
  });
});

const PORT = process.env.PORT || 4500;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
