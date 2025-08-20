import './App.css'
import TaskForm from './components/layouts/Task/TaskForm.jsx';
  
  function App() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
        <h1 className="text-3xl font-bold text-white mb-8 drop-shadow-lg">Task Manager</h1>
        <TaskForm />
      </div>
    )
  }
export default App;
