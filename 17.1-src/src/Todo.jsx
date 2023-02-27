import React, { useState, useEffect } from "react";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() === "") return;
    const newTask = {
      id: Date.now(),
      text: inputValue,
      completed: false
    };
    setTasks([...tasks, newTask]);
    setInputValue("");
  };

  const handleDeleteTask = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  const handleCompleteTask = (taskId) => {
    const newTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Add a new task..."
      />
      <button onClick={handleAddTask}>Add</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              onClick={() => handleCompleteTask(task.id)}
              style={{ textDecoration: task.completed ? "line-through" : "none" }}
            >
              {task.text}
            </span>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
            {task.completed ? <span>✔️</span> : <span>❌</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
