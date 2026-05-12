import { useContext } from "react";
import { TodoContext } from "../context/todoContext";
import { useState } from "react";

export default function TodoForm() {
  const [text, setText] = useState("");
  const { addItem } = useContext(TodoContext);

  const handleSumbit = (e) => {
    e.preventDefault();
    addItem(text);
    setText("");
  };

  return (
    <form onSubmit={handleSumbit} action="">
      <input
        value={text}
        type="text"
        onChange={(e) => setText(e.target.value)}
      />
      <button>add</button>
    </form>
  );
}
