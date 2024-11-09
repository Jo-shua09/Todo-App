import { useState } from "react";
import styles from "./form.module.css";

const Form = ({ todos, setTodos }) => {
  // const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }

  // const handleAdd = (e) => {
  //   if (!todo.trim()) {
  //     alert("Please enter a todo item.");
  //     return e.preventDefault();
  //   }
  // };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.form_container}>
        <input
          type="text"
          value={todo.name}
          placeholder="Enter todo..."
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
        />
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default Form;
