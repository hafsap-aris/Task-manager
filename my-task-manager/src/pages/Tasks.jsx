import React from "react";
import TaskApp from "../components/Task/TaskApp.jsx";

const Tasks = ({ tasks, setTasks }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-emerald-950 via-teal-900 to-slate-900 px-4 py-8 islamic-bg">
            <TaskApp tasks={tasks} setTasks={setTasks} />
        </div>
    );
};

export default Tasks;