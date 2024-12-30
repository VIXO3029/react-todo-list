import React from 'react';

const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs
    .toString()
    .padStart(2, '0')}`;
};

const TodoItem = ({ todo, completeTodo, deleteTodo }) => {
  return (
    <li>
      <span className={todo.completed ? 'completed-task' : 'pending-task'}>
        {todo.text}
      </span>
      <span className="task-timer">{formatTime(todo.duration)}</span>
      {!todo.completed && (
        <button className="complete-btn" onClick={() => completeTodo(todo.id)}>
          Completar
        </button>
      )}
      <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
        Eliminar
      </button>
    </li>
  );
};

export default TodoItem;
