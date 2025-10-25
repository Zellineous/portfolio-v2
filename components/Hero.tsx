import React from 'react'
import { TextGenerateEffect } from './ui/TextGenerateEffect'

const Hero = () => {
  return (
    <div className="pb-20 pt-36 bg-black-100">
        <div className="h-full w-full">
            <div className="absolute pointer-events-none inset-0 items-center justify-center" />
            <div className="flex justify-center relative my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                <TextGenerateEffect
                    words="Hello I'm Raymond"
                    className="text-5xl md:text-7xl lg:text-8xl text-center"
                    filter={true}
                    duration={0.7}
                />
                <TextGenerateEffect
                    words="I am a Front end Developer based in California."
                    className="text-5xl md:text-7xl lg:text-8xl text-center"
                    filter={true}
                    duration={0.7}
                />
                <TextGenerateEffect
                    words="I am currently employed with Tang Math LLC with 3+ years of experience."
                    className="text-5xl md:text-7xl lg:text-8xl text-center"
                    filter={true}
                    duration={0.7}
                />
                <TextGenerateEffect
                    words="I am looking to move into the UI/UX Developer field."
                    className="text-5xl md:text-7xl lg:text-8xl text-center"
                    filter={true}
                    duration={0.7}
                />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero