import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
    const [hasScrolled, setHasScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setHasScrolled(true);
            } else {
                setHasScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        function handleClickOutside(event) {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false); // Tutup menu jika klik di luar
          }
        }
      
        if (isOpen) {
          document.addEventListener("mousedown", handleClickOutside);
        } else {
          document.removeEventListener("mousedown", handleClickOutside);
        }
      
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [isOpen]);

    return (
        <nav
            className={`bg-krem1 text-black px-8 md:px-16 lg:px-24 fixed w-full top-0 z-50 transition-shadow duration-300 ${hasScrolled ? 'shadow-md' : ''
                }`}
        >
            <div className="flex items-center justify-between w-full px-2 py-3 md:px-16">
                <a href="#home" className="text-2xl font-roboto hidden md:inline">IHSAN</a>
                <div className="md:hidden animate-slide-down">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-black">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d={!isOpen ? 'M4 6h16M4 12h16M4 18h16' : ''} />
                        </svg>
                    </button>
                </div>
                <div className="hidden md:flex space-x-10">
                    <a href="#home" className="hover:text-gray-400">Home</a>
                    <a href="#about" className="hover:text-gray-400">About Me</a>
                    <a href="#experiences" className="hover:text-gray-400">Experiences</a>
                    <a href="#project" className="hover:text-gray-400">Project</a>
                    <a href="#contact" className="hover:text-gray-400">Contact Me</a>
                </div>
                {isOpen && (
                    <div ref={dropdownRef} className="md:hidden flex flex-col space-y-4 mt-4 pb-4 items-center bg-krem1 w-full">
                        <a href="#home" className="hover:text-gray-400 transition-colors duration-200">Home</a>
                        <a href="#about" className="hover:text-gray-400 transition-colors duration-200">About Me</a>
                        <a href="#experiences" className="hover:text-gray-400 transition-colors duration-200">Experiences</a>
                        <a href="#project" className="hover:text-gray-400 transition-colors duration-200">Project</a>
                        <a href="#contact" className="hover:text-gray-400 transition-colors duration-200">Contact Me</a>
                    </div>
                )}

                <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden 
                md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-3 rounded-full">
                    Connect Me
                </button>
            </div>
        </nav>
    );
};

export default Navbar;