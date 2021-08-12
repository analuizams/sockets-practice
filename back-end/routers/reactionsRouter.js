const express = require('express');
const reactionsController = require('../controllers/reactionsController');

const reactionsRouter = express.Router();

reactionsRouter.get('/', reactionsController.getAllReactions);
// reactionsRouter.post('/', reactionsController.increaseReaction());

module.exports = reactionsRouter;
