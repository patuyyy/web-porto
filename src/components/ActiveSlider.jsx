import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

import { FaGithub } from "react-icons/fa";
import { IoMdLink } from "react-icons/io";

import { Project } from "../constant";

const ActiveSlider = () => {
    return (
        <div className="flex items-center w-auto justify-center flex-col bg-krem1 ">
            <Swiper
                breakpoints={{
                    340: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    1400: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                }}

                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="max-w-[90%] lg:max-w-[80%]"
            >
                {Project.map(item => (
                    <SwiperSlide key={item.id}>
                        <div className="flex flex-col gap-6 group relative shadow-lg
                        text-white rounded-xl px-6 py-8 h-[250px] w-full lg:h-[400px]
                        md:h-[300px] overflow-hidden">
                            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }} />
                            <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50 duration-100" />
                            <div className="relative flex flex-col gap-3">
                                <h3 className="text-sm font-roboto font-bold mb-2 md:text-2xl">{item.title}</h3>
                                <p className="font-roboto text-sm md:text-base">
                                    {item.desc}
                                </p>
                                <div className="space-x-4 mt-4">
                                    <button className="btn">
                                        <IoMdLink />
                                    </button>
                                    <a href={item.github} target="_blank" rel="noopener noreferrer">
                                        <button className="btn">
                                            <FaGithub />
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default ActiveSlider;