import React, { useReducer, useEffect } from "react";

const initialState = {
  tasks: [],
  inputValue: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TASKS":
      return { ...state, tasks: action.payload };
    case "SET_INPUT_VALUE":
      return { ...state, inputValue: action.payload };
    case "ADD_TASK":
      return { ...state, tasks: [...state.tasks, action.payload] };
    case "DELETE_TASK":
      return { ...state, tasks: state.tasks.filter((task) => task.id !== action.payload) };
    case "TOGGLE_TASK_COMPLETED":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        ),
      };
    default:
      return state;
  }
};

const TodoApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      dispatch({ type: "SET_TASKS", payload: savedTasks });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(state.tasks));
  }, [state.tasks]);

  const handleInputChange = (event) => {
    dispatch({ type: "SET_INPUT_VALUE", payload: event.target.value });
  };

  const handleAddTask = () => {
    if (state.inputValue.trim() === "") return;
    const newTask = {
      id: Date.now(),
      text: state.inputValue,
      completed: false,
    };
    dispatch({ type: "ADD_TASK", payload: newTask });
    dispatch({ type: "SET_INPUT_VALUE", payload: "" });
  };

  const handleDeleteTask = (taskId) => {
    dispatch({ type: "DELETE_TASK", payload: taskId });
  };

  const handleCompleteTask = (taskId) => {
    dispatch({ type: "TOGGLE_TASK_COMPLETED", payload: taskId });
  };

  return (
    <div>
      <input
        type="text"
        value={state.inputValue}
        onChange={handleInputChange}
        placeholder="Add a new task..."
      />
      <button onClick={handleAddTask}>Add</button>
      <ul>
        {state.tasks.map((task) => (
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
