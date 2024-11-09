import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length;

  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <pre>
        <span>completed</span> {completedTodos} |
        <span>Total Todo {totalTodos}</span>
      </pre>
    </div>
  );
};

export default Todo;
