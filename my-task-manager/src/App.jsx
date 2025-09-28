import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layouts/Header.jsx';
import Footer from './components/layouts/Footer.jsx';
import Home from './pages/Home.jsx';
import Tasks from "./pages/Tasks.jsx";
import CompletedTasks from "./pages/CompletedTasks.jsx";
import IncompletedTasks from "./pages/IncompletedTasks.jsx";
import useLocalStorage from './hooks/useLocalStorage.js';

function App() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);

  return (
    <Router>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-teal-900 to-slate-900 islamic-bg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks tasks={tasks} setTasks={setTasks} />} />
          <Route path="/completed" element={<CompletedTasks tasks={tasks} setTasks={setTasks} />} />
          <Route path="/incompleted" element={<IncompletedTasks tasks={tasks} setTasks={setTasks} />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
export default App;
