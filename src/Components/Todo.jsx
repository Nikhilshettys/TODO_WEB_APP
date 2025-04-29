import React, { useState } from 'react';
import Todoitems from './Todoitems'; // Assuming Todoitems is in the same directory

const Todo = () => {
  const [todos, setTodos] = useState([
    { no: 1, text: 'Sample task 1', display: 'incomplete' },
    { no: 2, text: 'Sample task 2', display: 'incomplete' },
  ]);

  // Toggle task completion
  const handleToggle = (no) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.no === no
          ? { ...todo, display: todo.display === 'completed' ? 'incomplete' : 'completed' }
          : todo
      )
    );
  };

  // Delete a task
  const handleDelete = (no) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.no !== no));
  };

  // Reset: Mark all tasks as incomplete
  const handleReset = () => {
    const updatedTodos = todos.map(todo => ({
      ...todo,
      display: 'incomplete',
    }));
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-container">
      <button className="todo-reset-btn" onClick={handleReset}>
        Reset All
      </button>
      <div className="todoitems-list">
        {todos.map(todo => (
          <Todoitems
            key={todo.no}
            no={todo.no}
            display={todo.display}
            text={todo.text}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
