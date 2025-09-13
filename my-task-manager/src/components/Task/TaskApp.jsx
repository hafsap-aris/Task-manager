import React, { useState, useEffect } from "react";
import TaskForm from "./TaskForm.jsx";
import TaskCard from "./TaskCard.jsx";
// import useLocalStorage from "../hooks/useLocalStorage.jsx";

function TaskApp() {
    const [tasks, setTasks] = useState([]);
    const [editingTask, setEditingTask] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const savedTasks = localStorage.getItem('taskManagerTasks');
        if (savedTasks) {
            try {
                const parsedTasks = JSON.parse(savedTasks);
                setTasks(parsedTasks);
            } catch (error) {
                console.error('Error parsing saved tasks:', error);
                
                setTasks([]);
            }
        }
        setIsLoaded(true);
    }, []);

    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem('taskManagerTasks', JSON.stringify(tasks));
        }
    }, [tasks, isLoaded]);

    function handleAddTask(task) {
        const newTask = {
            ...task,
            id: Date.now(),
            completed: false
        };
        const updatedTasks = [newTask, ...tasks];
        setTasks(updatedTasks);
        console.log("Task List:", updatedTasks); 
    }

    function handleToggleComplete(taskId) {
        setTasks(tasks.map(task => 
            task.id === taskId 
                ? { ...task, completed: !task.completed }
                : task
        ));
    }

    function handleDeleteTask(taskId) {
        setTasks(tasks.filter(task => task.id !== taskId));
    }

    function handleEditTask(taskId, updatedTaskData) {
        setTasks(tasks.map(task => 
            task.id === taskId 
                ? { ...task, ...updatedTaskData }
                : task
        ));
        setEditingTask(null);
    }

    function handleStartEdit(taskId) {
        const taskToEdit = tasks.find(task => task.id === taskId);
        setEditingTask(taskToEdit);
    }

    // Derived state
    const hasNoTasks = tasks.length === 0;
    const allTasksCompleted = tasks.length > 0 && tasks.every(task => task.completed);

    return (
        <div className="w-full max-w-2xl mx-auto bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 p-8 rounded-xl shadow-2xl border border-gray-800">
            <h1 className="text-3xl font-bold text-white mb-8 drop-shadow-lg text-center">Task Manager</h1>
            <TaskForm 
                onAddTask={handleAddTask} 
                onEditTask={handleEditTask}
                editingTask={editingTask}
            />

            {/* Empty state message */}
            {hasNoTasks && (
                <div className="mt-8 flex items-center justify-center">
                    <div className="w-full text-center border border-dashed border-gray-600 rounded-lg p-6 bg-gray-800/60">
                        <p className="text-gray-200 text-lg font-semibold">Start by adding your first task!</p>
                        <p className="text-gray-400 text-sm mt-1">Use the form above to create something to work on.</p>
                    </div>
                </div>
            )}

            {/* All complete message */}
            {allTasksCompleted && (
                <div className="mt-8 flex items-center justify-center">
                    <div className="w-full text-center border border-green-600 rounded-lg p-6 bg-green-900/30">
                        <p className="text-green-300 text-lg font-bold">Keep up the good work!</p>
                        <p className="text-green-200 text-sm mt-1">All tasks are completed!</p>
                    </div>
                </div>
            )}

            {!hasNoTasks && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                    {tasks.map((task) => (
                        <TaskCard 
                            key={task.id} 
                            task={task}
                            onToggleComplete={handleToggleComplete}
                            onDelete={handleDeleteTask}
                            onEdit={handleStartEdit}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default TaskApp;