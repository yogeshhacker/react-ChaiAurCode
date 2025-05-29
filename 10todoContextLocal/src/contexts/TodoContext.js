import { useContext } from "react";
import React from "react";
export const TodoContext = React.createContext({
  todos: [
    { id: 1, text: "Buy milk", completed: false },
    { id: 2, text: "Walk the dog", completed: false },
    { id: 3, text: "Do laundry", completed: false },
  ],
  addTodo: (todo) => {},
  updatedTodo: (id,todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {}, 

});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoContextProvider = TodoContext.Provider;
