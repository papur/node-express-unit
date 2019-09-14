const TodoModel = require('../model/todo.model');

exports.createTodo = (req, res, next) => {
  const creatadModel = TodoModel.create(req.body);
  res.status(201).json(creatadModel);
};