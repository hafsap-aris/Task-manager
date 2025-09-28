import React from "react";
import TaskCard from "../components/Task/TaskCard.jsx";

function CompletedTasks({ tasks, setTasks }) {
  const completed = tasks.filter(task => task.completed);

  const handleToggleComplete = (taskId) => {
    setTasks(tasks.map(t => t.id === taskId ? { ...t, completed: !t.completed } : t));
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(t => t.id !== taskId));
  };

  const handleStartEdit = () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-gradient-to-br from-emerald-950 via-teal-900 to-slate-900 islamic-bg">
      <h2 className="text-3xl font-bold text-amber-300 mb-8 drop-shadow-lg">Completed Tasks</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-3xl">
        {completed.length > 0 ? (
          completed.map(task => (
            <TaskCard
              key={task.id}
              task={task}
              onToggleComplete={handleToggleComplete}
              onDelete={handleDeleteTask}
              onEdit={handleStartEdit}
              cardClass="bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900 border-2 border-amber-400 shadow-xl rounded-2xl p-6 flex flex-col justify-between min-h-[260px]"
              buttonGroupClass="flex justify-end gap-2 mt-6"
              buttonClass="px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
            />
          ))
        ) : (
          <div className="text-emerald-200/80 text-center col-span-full">No completed tasks yet.</div>
        )}
      </div>
    </div>
  );
}

export default CompletedTasks;