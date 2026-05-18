import { useContext } from "react";
import { TodoContext } from "../context/todoContext";
import styles from "../styles/TodoCard.module.css";
import { useState } from "react";

export default function TodoCard({ title, done, createdAt, id }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(title);
  const { deleteItem, toggleComplete, editItem } = useContext(TodoContext);

  const date = new Date(createdAt).toLocaleString();

  /// checks if in "editing mode", if yes calledit item function, if not change isediting state
  const handleEdit = () => {
    if (isEditing) {
      editItem(id, text);
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  return (
    <div className={styles.wrapper}>
      <input
        onChange={() => toggleComplete(id)}
        id="checkbox"
        type="checkbox"
        checked={done}
      />
      <label htmlFor="checkbox">Completed</label>
      <p>{date}</p>
      {isEditing ? (
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      ) : (
        <h3>{title}</h3>
      )}
      <button onClick={() => deleteItem(id)}>Delete</button>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </div>
  );
}
