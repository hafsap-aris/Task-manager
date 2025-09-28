import React from 'react';
import { Link } from 'react-router-dom';
function Header(){
return(
    <nav className="flex justify-between items-center px-6 py-4 bg-emerald-950 text-emerald-50 shadow-md border-b border-emerald-800/60">
        <ul className="flex gap-6">
            <li className="hover:text-amber-300 hover:underline cursor-pointer"><Link to="/">Home</Link></li>
            <li className="hover:text-amber-300 hover:underline cursor-pointer"><Link to="/tasks">Task Manager</Link></li>
            <li className="hover:text-amber-300 hover:underline cursor-pointer"><Link to="/completed">Completed</Link></li>
            <li className="hover:text-amber-300 hover:underline cursor-pointer"><Link to="/incompleted">Incompleted Tasks</Link></li>
        </ul>
    </nav>
)
}
export default Header;