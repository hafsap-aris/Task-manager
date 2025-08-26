import React from 'react';
import { Link } from 'react-router-dom';
function Header(){
return(
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white shadow-md">
        <ul className="flex gap-6">
            <li className="hover:text-gray-300 cursor-pointer"><Link to="/">Home</Link></li>
            <li className="hover:text-gray-300 cursor-pointer"><Link to="/tasks">Tasks</Link></li>
            <li className="hover:text-gray-300 cursor-pointer"><Link to="/explore">Explore</Link></li>
            <li className="hover:text-gray-300 cursor-pointer"><Link to="/about">About</Link></li>
        </ul>
    </nav>
)
}
export default Header;