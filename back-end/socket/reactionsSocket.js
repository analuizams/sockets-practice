const reactionsModel = require('../models/reactionsModel');

function ioReactions(io) {
  // achamos que aqui o io espera receber um "emit" vindo do front para chamar a callback que vai lidar com ele
  io.on('connection', (socket) => {
    // socket indentifica o quem realizou o emit
    socket.on('increaseReaction', async(data) => {
      // aqui a funcao recebe a data do emit e chama o model
      await reactionsModel.increaseReaction(data.id);
      const reaction = await reactionsModel.getReactionById(data.id);
      // aqui vamos pegar só a reação para atualizar a contagem dela
      io.emit('refreshReactions', reaction);
    })
  })
};

module.exports = ioReactions;
