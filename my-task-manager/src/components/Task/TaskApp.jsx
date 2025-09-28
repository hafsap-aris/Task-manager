import React, { useState} from "react";
import TaskForm from "./TaskForm.jsx";
import TaskCard from "./TaskCard.jsx";

function TaskApp({ tasks, setTasks }) {
    const [editingTask, setEditingTask] = useState(null);

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

    const pendingTasks = tasks.filter(t => !t.completed);

    return (
        <div className="w-full max-w-2xl mx-auto bg-emerald-900/30 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-emerald-700">
            
            <TaskForm 
                onAddTask={handleAddTask} 
                onEditTask={handleEditTask}
                editingTask={editingTask}
            />

            {/* Empty state message */}
            {hasNoTasks && (
                <div className="mt-8 flex items-center justify-center">
                    <div className="w-full text-center border border-dashed border-emerald-700 rounded-lg p-6 bg-emerald-900/40">
                        <p className="text-emerald-100 text-lg font-semibold">Start by adding your first task!</p>
                        <p className="text-emerald-300 text-sm mt-1">Use the form above to create something to work on.</p>
                    </div>
                </div>
            )}

            {/* All complete message */}
            {allTasksCompleted && (
                <div className="mt-8 flex items-center justify-center">
                    <div className="w-full text-center border border-amber-500 rounded-lg p-6 bg-amber-900/20">
                        <p className="text-amber-500 text-lg font-bold">All tasks completed!</p>
                        <p className="text-amber-500 text-sm font-light">Keep up the Good Work!</p>
                    </div>
                </div>
            )}

            {!hasNoTasks && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                    {pendingTasks.map((task) => (
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