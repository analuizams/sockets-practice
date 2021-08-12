const express = require('express');
const http = require('http');
const cors = require('cors');
const reactionsRouter = require('./routers/reactionsRouter');
const ioReactions = require('./socket/reactionsSocket');

const app = express();

const httpServer = http.createServer(app);
// http é o modeulo do node que lida com tudo que tem a ver com http (como um 'fs'para http)
// aqui o createServer vai registrar uma funcao que vai tratar futuros pacotes http
// quando dermos o '.listen' o node informa pro sistema que quer receber os pacotes daquela porta,
// ai ele trata os pacotes e passa pra funcao (o app por exemplo é uma função e por isso passamos pro createServer)

const PORT = 3001
// PORT será 3001 porque o front-end vai rodar na 3000

app.use(cors());

// cors vai deifinir qual endereço podem acessar e quais métodos/headers ele aceita!
const io = require('socket.io')(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
    // endereço onde o front tá rodando, de onde vem as requisicoes
    method: ['GET', 'POST']
  }
});

ioReactions(io);

app.use('/reactions', reactionsRouter);

httpServer.listen(PORT, () => console.log(`a família tá online na porta ${PORT}`));
