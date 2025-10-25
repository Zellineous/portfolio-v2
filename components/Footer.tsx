import React from 'react'
import { socialMedia } from "@/data";
import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./MagicButton";


const Footer = () => {
  return (
    <section id="Contact-section">
        <footer className="w-full pt-20 pb-10" id="contact">
            <div className="h-full w-full">
                <h1 className="text-5xl md:text-7xl lg:text-8xl text-center border-b-2 border-[#A40CEB] border-solid pb-2">
                    Contact
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">
                    If you would like to get in touch, feel free to reach out via email!<br />
                    Feel free to check out my links below as well.<br />
                </p>
                <a className="flex flex-col items-center" href="mailto:rayymond.zuo@gmail.com">
                    <MagicButton
                    title="Let's get in touch"
                    icon={<FaLocationArrow />}
                    position="right"
                    />
                </a>
            </div>
            <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                <p className="md:text-base text-sm md:font-normal font-light">
                    Copyright © 2025 Raymond Zuo
                </p>

                <div className="flex items-center md:gap-3 gap-6">
                    {socialMedia.map((info) => (
                        <a href={info.link}>
                            <div
                            key={info.id}
                            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                            >
                                <img src={info.img} alt="icons" width={20} height={20} />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    </section>
  )
}

export default Footer