import React from 'react'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { useInView } from "react-intersection-observer"

const About = () => {
  return (
    <section id="About-section">
        <div className="py-20">
            <div className="pb-20 pt-36 bg-black-100">
                <div className="h-full w-full">
                    <div className="absolute pointer-events-none inset-0 items-center justify-center" />
                        <h1 className="text-5xl md:text-7xl lg:text-8xl text-center border-b-2 border-[#A40CEB] border-solid pb-2">
                            About
                        </h1> 
                    <div className="flex justify-center relative my-20 z-10">
                        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                            I am a front end developer with 3+ year of experience working in React. <br />
                            I’m currently looking to expand my field by moving in to UI/UX development. <br />
                            I am always ready to learn from others and work collaboratively to make the  <br />
                            best digital experiences for consumers. <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About