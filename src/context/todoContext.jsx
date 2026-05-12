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
    setTodo((prev) => [...prev, newItem]);
  };

  //delet
  const deleteItem = (id) => {};
  //edit
  //complete

  //FILTER

  //--------------------
  const providerOBJ = { todo, addItem };
  return (
    <TodoContext.Provider value={providerOBJ}>{children}</TodoContext.Provider>
  );
};
