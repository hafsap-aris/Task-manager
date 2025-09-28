import React, { useState, useEffect } from "react";

function TaskForm({ onAddTask, onEditTask, editingTask }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [priority, setPriority] = useState("medium");

    // Populate form fields when editing a task
    useEffect(() => {
        if (editingTask) {
            setTitle(editingTask.title || "");
            setDescription(editingTask.description || "");
            setDueDate(editingTask.dueDate || "");
            setPriority(editingTask.priority || "medium");
        } else {
            // Reset form when not editing
            setTitle("");
            setDescription("");
            setDueDate("");
            setPriority("medium");
        }
    }, [editingTask]);

    function handleSubmit(e) {
        e.preventDefault();

        if (editingTask) {
            const updatedFields = {
                title,
                description,
                dueDate,
                priority
            };
            if (onEditTask) {
                onEditTask(editingTask.id, updatedFields);
            }
        } else {
            const newTask = {
                title,
                description,
                dueDate,
                priority,
                completed: false
            };
            if (onAddTask) {
                onAddTask(newTask);
            }
        }
        
        console.log("Task submitted:", { title, description, dueDate, priority });
        
        setTitle("");
        setDescription("");
        setDueDate("");
        setPriority("medium");
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg mx-auto bg-emerald-900/30 backdrop-blur-sm p-8 rounded-2xl shadow-2xl space-y-6 border border-emerald-700"
        >
            <div>
                <label htmlFor="title" className="block font-semibold mb-2 text-emerald-100">
                    Title <span className="text-rose-400">*</span>
                </label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter task name"
                    required
                    className="w-full bg-slate-800 text-emerald-100 border border-emerald-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                />
            </div>
            <div>
                <label htmlFor="description" className="block font-semibold mb-2 text-emerald-100">
                    Description
                </label>
                <textarea
                    id="description"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter task description"
                    className="w-full bg-slate-800 text-emerald-100 border border-emerald-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                />
            </div>
            <div>
                <label htmlFor="dueDate" className="block font-semibold mb-2 text-emerald-100">
                    Due Date
                </label>
                <input
                    id="dueDate"
                    name="dueDate"
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    className="w-full bg-slate-800 text-emerald-100 border border-emerald-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                />
            </div>
            <div>
                <label htmlFor="priority" className="block font-semibold mb-2 text-emerald-100">
                    Priority
                </label>
                <select
                    id="priority"
                    name="priority"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    className="w-full bg-slate-800 text-emerald-100 border border-emerald-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                >
                    <option value="low" className="bg-slate-800 text-emerald-100">Low</option>
                    <option value="medium" className="bg-slate-800 text-emerald-100">Medium</option>
                    <option value="high" className="bg-slate-800 text-emerald-100">High</option>
                </select>
            </div>
            <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-700 via-teal-700 to-slate-800 text-white py-3 rounded-lg font-bold shadow-lg hover:scale-105 hover:from-emerald-800 hover:via-teal-800 hover:to-slate-700 transition-all duration-200"
            >
                <span className="inline-flex items-center gap-2">
                    {editingTask ? "Update Task" : "Create Task"}
                </span>
            </button>
        </form>
    );
}

export default TaskForm;
