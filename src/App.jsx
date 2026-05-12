import "./App.css";
import { useContext } from "react";
import { TodoContext } from "./context/todoContext";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <>
      <TodoForm />
      <TodoList />
    </>
  );
}
