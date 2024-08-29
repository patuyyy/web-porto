import React from "react";

const Navbar = () => {
    return (
        <nav className="bg-black text-white px-8 md:px-16 lg:px-24">
            <div className="container py-2 flex justify-center md:justify-between items-center max-w-full">
                <a href="#home" className="text-2xl font-bold hidden md:inline">IHSAN</a>
                <div className="space-x-10">
                    <a href="#home"className="hover:text-gray-400">Home</a>
                    <a href="#about"className="hover:text-gray-400">About Me</a>
                    <a href="#experiences"className="hover:text-gray-400">Experiences</a>
                    <a href="#project"className="hover:text-gray-400">Project</a>
                    <a href="#contact"className="hover:text-gray-400">Contact Me</a>
                </div>
                <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden 
                md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-3 rounded-full">Connect Me</button>
            </div>
        </nav>
    )
}

export default Navbar