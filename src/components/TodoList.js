import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, completeTodo, deleteTodo }) => {
  return (
    <div>
      <h2>Tareas Pendientes</h2>
      <ul>
        {todos.filter((todo) => !todo.completed).map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>

      <h2>Tareas Completadas</h2>
      <ul>
        {todos.filter((todo) => todo.completed).map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
