const connection = require("./connection");
const { ObjectId } = require("mongodb");

const getAllReactions = () => connection().then(
  db => db.collection('reactions').find().toArray()
);

const getReactionById = (id) => connection().then(
  db => db.collection('reactions').findOne({ _id: ObjectId(id)})
);

const increaseReaction = (id) => connection().then(
  db => db.collection('reactions').updateOne(
    { _id: ObjectId(id) },
    { $inc: { count: 1 } }
  )
);

module.exports = {
  getAllReactions,
  getReactionById,
  increaseReaction,
};
