// aqui já vamos chamar o model direto (arquitetura Model-Controller)
const reactionsModel = require('../models/reactionsModel');

const OK = 200;

const getAllReactions = async (req, res) => {
  const reactions = await reactionsModel.getAllReactions();
  res.status(OK).json(reactions);
};

module.exports = {
  getAllReactions,
};
