import React from 'react'
import { projects } from '@/data'
import { PinContainer } from './ui/3d-pin'

const Projects = () => {
  return (
    <section id="Projects-section">
        <div className="py-20">
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-center border-b-2 border-[#A40CEB] border-solid pb-2">
            Projects
            </h1> 
            <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
                {projects.map(({id, title, des, img, iconLists, link}) => (
                    <div key = {id} className="lg:min-h-[32.5re,] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]">
                        <PinContainer iconLists ={iconLists} href={link}>
                            <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                                <img src={img} alt={title} className="z-10 absolute bottom-0" />
                            </div>
                            <div>
                                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                                    {title}
                                </h1>
                                <p>
                                    {des}
                                </p>
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div>
        </div>
    </section> 
  )
}

export default Projects