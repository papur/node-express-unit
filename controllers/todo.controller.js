const TodoModel = require('../model/todo.model');

exports.createTodo = async (req, res, next) => {
  const creatadModel = await TodoModel.create(req.body);
  res.status(201).json(creatadModel);
};