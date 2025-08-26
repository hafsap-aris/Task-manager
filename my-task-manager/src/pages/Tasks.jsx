import React from "react";
import TaskApp from "../components/Task/TaskApp.jsx";

const Tasks = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 px-4 py-8">
            <TaskApp />
        </div>
    );
};

export default Tasks;