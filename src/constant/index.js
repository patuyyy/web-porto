import javaImg from "../assets/java.png"
import vhdlImg from "../assets/vhdl.svg"
import jbus from "../assets/jbus.png";
import galaxyShooter from "../assets/galaxyShooter.png";
import requestdong from "../assets/requestdong.jpg";
import prof_velo from "../assets/prof_velo.png";
import prof_netlab from "../assets/prof_netlab.png";
import project_jbus from "../assets/project_jbus.png";
import project_jarkom from "../assets/project_jarkom.png";


export const Project = [
    {
        id: 1,
        title: "JBus",
        tech: "Java",
        image: project_jbus,
        desc: "JBus is a Springboot-based application designed to facilitate bus transportation services. It provides features such as route management, passenger tracking, and real-time updates for bus schedules.",
        github: "https://github.com/patuyyy/JBus"
    },
    {
        id: 2,
        title: "JBus Android",
        tech: "Java",
        image: jbus,
        desc: "JBus Android is the mobile application counterpart of JBus, allowing users to access bus schedules, and manage their travel plans directly from their Android devices.",
        github: "https://github.com/patuyyy/JBus-android"
    },
    {
        id: 3,
        title: "request-dong!",
        tech: "Node.js and Java",
        image: requestdong,
        desc: "request-dong! is a Node.js for backend and Java for frontend android application that provides a platform for users to make requests and receive responses in real-time. It utilizes WebSocket technology for efficient communication.",
        github: "https://github.com/patuyyy/request-dong"
    },
    {
        id: 4,
        title: "Network Design and Simulation",
        tech: "Cisco Packet Tracer",
        image: project_jarkom,
        desc: "This project involves designing and simulating a network using Cisco Packet Tracer. It includes the configuration of routers, switches, and end devices to create a functional network environment. The project demonstrates my skills in network design and troubleshooting.",
        github: ""
    },
    {
        id: 5,
        title: "Galaxy Shooter",
        tech: "Unity and C#",   
        image: galaxyShooter,
        desc: "Galaxy Shooter is a 2D space shooter game developed using Unity and C#. Players control a spaceship and must defeat waves of enemies while avoiding obstacles. The game features power-ups, multiple levels, and a scoring system.",
        github: "https://github.com/patuyyy/OOP-Unity"
    },
    {
        id: 6,
        title: "DES Encyphering",
        tech: "VHDL",
        image: vhdlImg,
        desc: "This project implements the Data Encryption Standard (DES) algorithm using VHDL, showcasing my skills in hardware description languages and digital design. It includes both encryption and decryption functionalities.",
        github: "https://github.com/patuyyy/desencypheringvhdl"
    }
];

export const ProfessionalExperience = [
    {
        id: 1,
        title: "NOC Intern at Velo Networks",
        image: prof_velo,
        desc: "As a NOC Intern at Velo Networks, I gained hands-on experience in network operations, monitoring, and troubleshooting. I assisted in maintaining network performance and ensuring seamless network operations.",
    },
    {
        id: 2,
        title: "Network Laboratory Assistant at FTUI",
        image: prof_netlab,
        desc: "In my role as a Network Laboratory Assistant at FTUI, I supported students in understanding network concepts and practical applications. I assisted in setting up lab environments and troubleshooting network issues.",
    },
];