import React from "react";

function TaskCard({ task, onToggleComplete, onDelete, onEdit }) {
    const { id, title, description, dueDate, priority, completed } = task;

    function getPriorityColor(priority) {
        switch(priority) {
            case 'high':
                return 'bg-red-600 text-red-100';
            case 'medium':
                return 'bg-yellow-600 text-yellow-100';
            case 'low':
                return 'bg-green-600 text-green-100';
            default:
                return 'bg-gray-600 text-gray-100';
        }
    }

    const dueDateLabel = (() => {
        if (!dueDate) return 'No due date';
        const d = new Date(dueDate);
        return isNaN(d.getTime()) ? 'No due date' : d.toLocaleDateString();
    })();

    return (
        <div className={`bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-lg shadow-lg border transition-all duration-300 hover:shadow-xl ${
            completed 
                ? 'border-green-500 opacity-75' 
                : 'border-gray-600 hover:border-gray-500'
        }`}>
            <div className="flex flex-col h-full">
                <div className="flex-1">
                    <h3 className={`text-xl font-semibold mb-2 ${
                        completed ? 'text-green-400 line-through' : 'text-white'
                    }`}>
                        {title}
                    </h3>
                    {description && (
                        <p className={`text-sm mb-2 ${
                            completed ? 'text-gray-400' : 'text-gray-300'
                        }`}>
                            {description}
                        </p>
                    )}
                    <p className={`text-sm mb-2 ${
                        completed ? 'text-gray-400' : 'text-gray-300'
                    }`}>
                        Due: {dueDateLabel}
                    </p>
                    <div className="flex gap-2 mb-2">
                        <div className={`text-xs px-2 py-1 rounded-full inline-block ${getPriorityColor(priority)}`}>
                            {priority ? (priority.charAt(0).toUpperCase() + priority.slice(1)) : 'Medium'}
                        </div>
                        <div className={`text-xs px-2 py-1 rounded-full inline-block ${
                            completed 
                                ? 'bg-green-600 text-green-100' 
                                : 'bg-yellow-600 text-yellow-100'
                        }`}>
                            {completed ? 'Completed' : 'Pending'}
                        </div>
                    </div>
                </div>
                
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-600">
                    <button
                        onClick={() => onToggleComplete(id)}
                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                            completed
                                ? 'bg-yellow-600 hover:bg-yellow-700 text-white'
                                : 'bg-green-600 hover:bg-green-700 text-white'
                        }`}
                        title={completed ? 'Mark as incomplete' : 'Mark as complete'}
                    >
                        {completed ? '↩️ Undo' : '✅ Complete'}
                    </button>
                    
                    <div className="flex gap-2">
                        <button
                            onClick={() => onEdit(id)}
                            className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition-colors duration-200"
                            title="Edit task"
                        >
                            ✏️ Edit
                        </button>
                        
                        <button
                            onClick={() => onDelete(id)}
                            className="px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md text-sm font-medium transition-colors duration-200"
                            title="Delete task"
                        >
                            🗑️ Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TaskCard;