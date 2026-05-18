/* eslint-disable react-refresh/only-export-components */
// completed not completed, box

import { useState } from "react";
import { createContext } from "react";

//INITIALIZE CONTEXT
export const TodoContext = createContext({});

// PROVIDER
export const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState([]);

  //add
  const addItem = (text) => {
    const newItem = {
      id: crypto.randomUUID(),
      title: text,
      createdAt: Date.now(),
      done: false,
    };
    console.log("Additem", addItem);

    setTodo((prev) => [...prev, newItem]);
  };

  //delete
  //sets todo to a new version without selceted element
  const deleteItem = (id) => {
    setTodo((prev) => prev.filter((item) => item.id !== id));
  };
  //edit
  const editItem = (id, newText) => {
    setTodo((prev) =>
      prev.map((item) => (item.id == id ? { ...item, title: newText } : item)),
    );
  };

  //complete
  const toggleComplete = (id) => {
    setTodo((prev) =>
      prev.map((item) =>
        item.id == id ? { ...item, done: !item.done } : item,
      ),
    );
  };

  //FILTER

  //--------------------
  const providerOBJ = { todo, addItem, deleteItem, toggleComplete, editItem };
  return (
    <TodoContext.Provider value={providerOBJ}>{children}</TodoContext.Provider>
  );
};
