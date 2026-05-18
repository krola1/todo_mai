import { useContext } from "react";
import { TodoContext } from "../context/todoContext";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useState } from "react";
import { TODO_FILTERS } from "../utils/filterConstants";
import { useMemo } from "react";

export default function TodoList() {
  const [filter, setFilter] = useState(TODO_FILTERS.ALL);
  const { todo } = useContext(TodoContext);

  //filter

  const filteredTodoMemo = useMemo(() => {
    return todo.filter((item) => {
      if (filter === TODO_FILTERS.ACTIVE) return !todo.done;
      if (filter === TODO_FILTERS.COMPLETED) return todo.done;
      return true;
    });
  }, [todo, filter]);

  const filteredTodo = todo.filter((todo) => {
    if (filter === TODO_FILTERS.ACTIVE) return !todo.done;
    if (filter === TODO_FILTERS.COMPLETED) return todo.done;
    return true;
  });

  return (
    <>
      <TodoFilter filter={filter} setFilter={setFilter} />
      {filteredTodo?.map((item) => (
        <TodoCard key={item.id} {...item} />
      ))}
    </>
  );
}
