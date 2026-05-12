import { useContext } from "react";
import { TodoContext } from "../context/todoContext";
import styles from "../styles/TodoCard.module.css";

export default function TodoCard({ title, done, createdAt, id }) {
  const { deleteItem, toggleComplete } = useContext(TodoContext);

  return (
    <div className={styles.wrapper}>
      <input
        onChange={() => toggleComplete(id)}
        id="checkbox"
        type="checkbox"
        checked={done}
      />
      <label htmlFor="checkbox">Completed</label>
      <p>{createdAt}</p>
      <h3>{title}</h3>
      <button onClick={() => deleteItem(id)}>Delete</button>
      <button>edit</button>
    </div>
  );
}
