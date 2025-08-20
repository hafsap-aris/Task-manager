import React, { useState } from "react";
import TaskForm from "./TaskForm";

function TaskApp() {
    const [tasks, setTasks] = useState([]);

    function handleAddTask(task) {
        const newTask = {
            ...task,
            id: Date.now(),
            completed: false
        };
        const updatedTasks = [newTask, ...tasks]; // Add to beginning
        setTasks(updatedTasks);
        console.log("Task List:", updatedTasks); // Log entire list
    }

    return (
        <div>
            <h1>Task Manager</h1>
            <TaskForm onAddTask={handleAddTask} />
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>{task.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default TaskApp;