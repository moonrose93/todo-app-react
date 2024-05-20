import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState([]);
  const [theme, setTheme] = useState('light');
  const [icon, setIcon] = useState('night-mode');

  const handleThemeChange = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    setIcon((prevIcon) => (prevIcon === 'night-mode' ? 'light-mode-icon' : 'night-mode'));
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTask = () => {
    if (inputValue !== '' && tasks.length < 5) {
      setTasks([...tasks, { text: inputValue, done: false }]);
      setInputValue(''); // Clear the input field after adding a task
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleToggle = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].done = !updatedTasks[index].done;
    setTasks(updatedTasks);
  };

  return (
    <div className={`App ${theme}`}>
      <div className="top">
        <div className="btn-heading">
          <h1>Todo List</h1>
          <button onClick={handleThemeChange} className={icon}></button>
        </div>
        <div className="input-btn">
          <input onChange={handleChange} className="icon" value={inputValue} type="text" placeholder="Add task" />
          <button onClick={handleAddTask} className="add-task">Add task</button>
        </div>
      </div>
      <div className="list-items-container">
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className={`list-item ${task.done ? "done-task" : ""}`}>
              <div onClick={() => handleToggle(index)} className={`check-box ${task.done ? "checked" : ""}`}></div>
              {task.text}
             <div> <button onClick={() => handleDeleteTask(index)} className="delete">Delete Task</button></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
