import React, { useState } from 'react';
import TodoItem from './TodoItem';

interface TODO {
    id: number;
    itemName: string;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<TODO[]>([]);
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim() !== '') {
      const newTodo: TODO = {
        id: Date.now(),
        itemName: input.trim(),
      };
      setTodos([...todos, newTodo]);
      setInput('');
    }
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleUpdate = (id: number, newText: string) => {
    setTodos(
      todos.map(todo => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>To-Do App</h2>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Add a task"
      />
      <button onClick={handleAdd}>Add</button>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
