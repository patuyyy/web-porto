import React from "react";
import { TypeAnimation } from "react-type-animation";
import photoProfile from "../assets/poto.png"

const Profile = () => {
    return (
        <div className="bg-krem1 text-black text-center py-16 mt-10" id="home">
            <img src={photoProfile} alt=""
                className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform
            transition-transform duration-300 hover:scale-105"/>
            <h1 className="text-4xl font-bold px-5">
                I'm {" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Raihan Muhammad Ihsan</span>
                , 
            </h1>
            <TypeAnimation className="text-4xl font-bold px-5 justify-center"
                    sequence={[
                        // Teks yang sama, hanya jeda 1 detik di akhir
                        'Full Stack Developer',
                        2500,
                        'Network Engineer',
                        2500,
                    ]}
                    wrapper="span" // bisa juga 'div', 'h1', 'p', dll.
                    speed={200} // Kecepatan mengetik
                    style={{ fontSize: 'text-4xl', display: 'inline-block' }}
                    repeat={Infinity} // Mengulang animasi tanpa batas
                />
            <p className="mt-4 text-lg text-black px-5">
                Student of Computer Engineering University of Indonesia
            </p>
            <div className="mt-8 space-x-4 ">
                <button
                    className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden 
                md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-3 rounded-full">
                    Contact Me
                </button>
                <a href="https://drive.google.com/file/d/1DJkkVgg-93Zm-3k_ZWFVuzvpE5QG99Oi/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <button
                        className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white hidden 
                md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-3 rounded-full">
                        Resume
                    </button>
                </a>

            </div>
        </div>
    )
}

export default Profile