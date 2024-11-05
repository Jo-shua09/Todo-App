import styles from "./todoitem.module.css";

const TodoItem = ({ item, todos, setTodos }) => {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }

  return (
    <div className={styles.item}>
      <div className={styles.item_name}>
        {item}

        <span>
          <button
            className={styles.delete_btn}
            onClick={() => handleDelete(item)}
          >
            delete
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
};

export default TodoItem;
