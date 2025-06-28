import React from "react";
import ImageCard from "./ImageCard";
import { ProfessionalExperience } from "../constant";


const Professional = () => {
    return (
        <div className="bg-krem1 text-black py-20" id='professional'>
            <h2 className="text-4xl font-bold text-center mb-12">Professional Experience</h2>
            <div className="container mx-auto px-8 md:px-16 lg:px-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {ProfessionalExperience.map((item =>
                    <ImageCard key={item.id} imgSrc={item.image}>
                        <h3 className="text-xl font-bold mb-2 font-roboto">
                            {item.title}
                        </h3>
                        <p className="font-roboto">
                            {item.desc}
                        </p>
                    </ImageCard>
                ))}
            </div>
        </div>
    )
}

export default Professional;