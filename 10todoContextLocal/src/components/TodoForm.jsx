import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();

    if (!todo) {
      return;
    }
    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <div className="mb-8">
      <p>Todo Form Placeholder</p>
      <form className="flex items-center gap-4" onSubmit={add}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Add a new todo"
          className="flex-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
