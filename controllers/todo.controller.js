const TodoModel = require('../model/todo.model');

exports.createTodo = async (req, res, next) => {
  try {
    const creatadModel = await TodoModel.create(req.body);
    res.status(201).json(creatadModel);
  } catch (err) {
    next(err);
  }
};