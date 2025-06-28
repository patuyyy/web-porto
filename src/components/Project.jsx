import React from "react";
import ActiveSlider from "./ActiveSlider";


const Project = () => {
    return (
        <div className="bg-krem1 text-black py-20" id='about'>
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-12">My Project</h2>
                <ActiveSlider />
            </div>
        </div>
    )
}

export default Project