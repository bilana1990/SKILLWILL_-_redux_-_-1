import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from './features/todoSlice';

function App() {
  const [text, setText] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer'
              }}
            >
              {todo.text}
            </span>
            <button 
              onClick={() => dispatch(toggleTodo(todo.id))} 
              style={{ marginLeft: '10px', backgroundColor: todo.completed ? 'green' : 'orange', color: 'white' }}
            >
              {todo.completed ? 'Undone' : 'Done'}
            </button>
            <button onClick={() => dispatch(deleteTodo(todo.id))} style={{ marginLeft: '10px' }}>
              🗑️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;