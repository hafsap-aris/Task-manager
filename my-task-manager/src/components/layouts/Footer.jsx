import React from 'react';

const Footer = () => (
    <footer className="w-full px-0 py-4 bg-emerald-950 text-emerald-100 text-center fixed left-0 bottom-0 z-[100] border-t border-emerald-800/60 opacity-70">
        <span>
            &copy; {new Date().getFullYear()} Task Manager. All rights reserved.
        </span>
    </footer>
);

export default Footer;