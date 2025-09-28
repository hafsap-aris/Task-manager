import React from "react";
import TaskCard from "../components/Task/TaskCard.jsx";

function IncompletedTasks({ tasks, setTasks }) {
  const incompleted = tasks.filter(task => !task.completed);

  const handleToggleComplete = (taskId) => {
    setTasks(tasks.map(t => t.id === taskId ? { ...t, completed: !t.completed } : t));
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(t => t.id !== taskId));
  };

  const handleStartEdit = () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-gradient-to-br from-emerald-950 via-teal-900 to-slate-900 islamic-bg">
      <h2 className="text-3xl font-bold text-emerald-200 mb-8 drop-shadow-lg">Incomplete Tasks</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
        {incompleted.length > 0 ? (
          incompleted.map(task => (
            <TaskCard key={task.id} task={task} onToggleComplete={handleToggleComplete} onDelete={handleDeleteTask} onEdit={handleStartEdit} />
          ))
        ) : (
          <div className="text-emerald-200/80 text-center col-span-full">No incomplete tasks yet.</div>
        )}
      </div>
    </div>
  );
}

export default IncompletedTasks;