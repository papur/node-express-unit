const TodoController = require('../../controllers/todo.controller');

describe("TodoController.createTodo", () => {
  it("schould have a createTodo function", () => {
    expect(typeof TodoController.createTodo).toBe("function");
  });
});