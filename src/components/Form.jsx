import { useState } from "react";
import styles from "./form.module.css";

const Form = ({ todos, setTodos }) => {
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }

  const handleAdd = (e) => {
    if (!todo.trim()) {
      alert("Please enter a todo item.");
      return;
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.form_container}>
        <input
          type="text"
          value={todo}
          placeholder="Enter todo..."
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit" onClick={handleAdd}>
          Add
        </button>
      </div>
    </form>
  );
};

export default Form;
