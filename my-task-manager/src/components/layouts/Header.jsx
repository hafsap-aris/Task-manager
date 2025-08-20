import React from "react";
import { Link } from 'react-router-dom' 
export default function Header(){
    return(
        <>
        <ul>
            <li><Link>Home</Link></li>
            <li><Link>Tasks</Link></li>
            <li><Link></Link></li>
            <li><Link>Home</Link></li>
        </ul>
        </>
    )
}