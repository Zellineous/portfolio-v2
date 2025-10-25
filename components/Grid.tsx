import React from 'react'
import { gridItems } from '@/data'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { TextGenerateEffect } from './ui/TextGenerateEffect'

const Grid = () => {
  return (
    <section id="Projects-section">
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-center pb-20">
            Projects
        </h1>
        <BentoGrid>
            {gridItems.map
            ((item) => (
            <BentoGridItem 
                id = {item.id}
                key = {item.id}
                title = {item.title}
                description = {item.description}
                className = {item.className}
            />))}
        </BentoGrid>
    </section>
  )
}

export default Grid