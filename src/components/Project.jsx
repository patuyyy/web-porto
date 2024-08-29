import React from "react";
import javaImg from "../assets/java.png"
import nodeImg from "../assets/node.png"
import vhdlImg from "../assets/vhdl.svg"

const project = [
    {
        id: 1,
        title: "JBus",
        tech: "Java",
        image: javaImg,
        github: "https://github.com/patuyyy/JBus"
    },
    {
        id: 2,
        title: "JBus Android",
        tech: "Java",
        image: javaImg,
        github: "https://github.com/patuyyy/JBus-android"
    },
    {
        id: 3,
        title: "request-dong!",
        tech: "Node.js and Java",
        image: nodeImg,
        github: "https://github.com/patuyyy/request-dong"
    },
    {
        id: 4,
        title: "DES Encyphering",
        tech: "VHDL",
        image: vhdlImg,
        github: "https://github.com/patuyyy/desencypheringvhdl"
    }
]
const Project = () => {
    return (
        <div className="bg-black text-white py-20 transition-all duration-500 ease-in-out" id='about'>
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-12">My Project</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {project.map(project => (
                        <div key={project.id}
                        className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform
                        transition-transform duration-300 hover:scale-105">
                            <img src={project.image} alt={project.title} className="rounded-lg mb-4
                            w-full h-48 object-contain"/>
                            <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text
                            bg-gradient-to-r from-green-400 to-blue-500">
                                {project.title}
                            </h3>
                            <p className="text-gray-400 mb-4">{project.tech}</p>
                            <a href={project.github} target="_blank" className="mt-4 inline-block text-green-400 hover:text-blue-500">
                                GitHub
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Project