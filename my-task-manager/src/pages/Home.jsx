import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center px-6">
      <h1 className="text-4xl font-bold text-white mb-4">Welcome to Task Manager</h1>
      
      <Link to="/tasks" className="bg-purple-700 text-white px-6 py-3 rounded-lg shadow hover:bg-purple-800 transition">
        Go to Tasks
      </Link>
    </div>
  );
}

export default Home;