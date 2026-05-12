import { useContext } from "react";
import { TodoContext } from "../context/todoContext";
import TodoCard from "./TodoCard";

export default function TodoList() {
  const { todo } = useContext(TodoContext);

  //filter

  return (
    <>
      {todo?.map((item) => (
        <TodoCard key={item.id} {...item} />
      ))}
    </>
  );
}
