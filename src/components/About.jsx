import React from "react";
import AboutImage from "../assets/poto.png"

const About = () => {
    return (
        <div className="bg-black text-white py-20" id='about'>
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
                <div className="flex flex-col md:flex-row items-center md:space-x-12">
                    <img src={AboutImage} alt=""
                        className="w-72 h-80 rounded object-cover mb-8 md:mb-0" />
                    <div className="flex-1">
                        <p className="text-lg mb-8">
                            Hello! I am a Computer Engineering student at the University of Indonesia
                            with a passion for technology and innovation. My academic journey has equipped
                            me with a strong foundation in both hardware and software, allowing me to explore
                            the fascinating intersection of these fields. I have a keen interest in areas such as
                            embedded systems, computer networks, and artificial intelligence, and I am always
                            eager to learn more and take on new challenges.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <label htmlFor="htmlandcss" className="w-2/12">HTML & CSS</label>
                                <div className="grow bg-gray-800 rounded-full h-2.5">
                                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                                    transform transition-transform duration-300 hover:scale-105 w-7/12">
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <label htmlFor="htmlandcss" className="w-2/12">C Programming</label>
                                <div className="grow bg-gray-800 rounded-full h-2.5">
                                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                                    transform transition-transform duration-300 hover:scale-105 w-9/12">
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <label htmlFor="htmlandcss" className="w-2/12">Java</label>
                                <div className="grow bg-gray-800 rounded-full h-2.5">
                                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                                    transform transition-transform duration-300 hover:scale-105 w-9/12">
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <label htmlFor="htmlandcss" className="w-2/12">Node.js</label>
                                <div className="grow bg-gray-800 rounded-full h-2.5">
                                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                                    transform transition-transform transform-or duration-300 hover:scale-105 w-9/12">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 flex justify-between text-center">
                            <div>
                                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r
                                from-green-400 to-blue-500">
                                    1.5+
                                </h3>
                                <p>Years Experience</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r
                                from-green-400 to-blue-500">
                                    5+
                                </h3>
                                <p>Projects Completed</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r
                                from-green-400 to-blue-500">
                                    3.69
                                </h3>
                                <p>GPA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About