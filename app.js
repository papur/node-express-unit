const express = require('express');
const todoRoutes = require('./routes/todo.routes');
const app = express();
const mongodb = require('./mongodb/mongodb.connect');

mongodb.connect();

app.use(express.json());

app.use('/todos', todoRoutes);

app.get('/', (req, res) => {
  res.json("Hello world");
});

/* app.listen(5000, () => {
  console.log("Server is running");
}); */

module.exports = app;
