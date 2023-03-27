import React from 'react'
import dice from '../public/assets/projects/dice.png.png'
import love from '../public/assets/projects/love.png.png'
import dashboard from '../public/assets/projects/dashboard.png.png'
import redabear from '../public/assets/projects/redabear.png.png'
import ProjectItem from './ProjectItem'
const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2 className='py-4'>What I've built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
            <ProjectItem title=' Dice Game Simulation' backgroundImg={dice} projectUrl='/dice'/>
            <ProjectItem title='Love Calculator' backgroundImg={love} projectUrl='/love'/>
            <ProjectItem title='Dashboard Website' backgroundImg={dashboard} projectUrl='/dashboard'/>
            <ProjectItem title='Landing Page' backgroundImg={redabear} projectUrl='/redabear'/>
            </div>
        </div>
    </div>
  )
}

export default Projects