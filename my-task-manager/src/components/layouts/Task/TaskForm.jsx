import React, { useState } from "react";

function TaskForm({ onAddTask }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [priority, setPriority] = useState("medium");

    function handleSubmit(e) {
        e.preventDefault();
        const task = {
            title,
            description,
            dueDate,
            priority,
            completed: false
        };
        if (onAddTask) {
            onAddTask(task);
        }
        console.log("Task submitted:", task);
        
        setTitle("");
        setDescription("");
        setDueDate("");
        setPriority("medium");
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg mx-auto bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 p-8 rounded-xl shadow-2xl space-y-6 border border-gray-800"
        >
            <div>
                <label htmlFor="title" className="block font-semibold mb-2 text-gray-200">
                    Title <span className="text-red-500">*</span>
                </label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter task name"
                    required
                    className="w-full bg-gray-800 text-gray-100 border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
                />
            </div>
            <div>
                <label htmlFor="description" className="block font-semibold mb-2 text-gray-200">
                    Description
                </label>
                <textarea
                    id="description"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter task description"
                    className="w-full bg-gray-800 text-gray-100 border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
                />
            </div>
            <div>
                <label htmlFor="dueDate" className="block font-semibold mb-2 text-gray-200">
                    Due Date
                </label>
                <input
                    id="dueDate"
                    name="dueDate"
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    className="w-full bg-gray-800 text-gray-100 border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
                />
            </div>
            <div>
                <label htmlFor="priority" className="block font-semibold mb-2 text-gray-200">
                    Priority
                </label>
                <select
                    id="priority"
                    name="priority"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    className="w-full bg-gray-800 text-gray-100 border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
                >
                    <option value="low" className="bg-gray-800 text-gray-100">Low</option>
                    <option value="medium" className="bg-gray-800 text-gray-100">Medium</option>
                    <option value="high" className="bg-gray-800 text-gray-100">High</option>
                </select>
            </div>
            <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-700 via-indigo-800 to-gray-900 text-white py-2 rounded-lg font-bold shadow-lg hover:scale-105 hover:from-purple-800 hover:via-indigo-900 hover:to-gray-800 transition-transform duration-150"
            >
                <span className="inline-flex items-center gap-2">
                    Create Task
                </span>
            </button>
        </form>
    );
}

export default TaskForm;