import React from 'react'
import SkillSet from './SkillSet'
import html from '../public/assets/skills/html.png'
import css from '../public/assets/skills/css.png'
import js from '../public/assets/skills/javascript.png'
import reacts from '../public/assets/skills/react.png'
import tw from '../public/assets/skills/tailwind.png'
import fb from '../public/assets/skills/firebase.png'
import github from '../public/assets/skills/github1.png'
import nj from '../public/assets/skills/nextjs.png'
const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
            <h2 className='py-4'>What I can do</h2>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 '>
           <SkillSet text='HTML' img={html}/>
           <SkillSet text='CSS' img={css}/>
           <SkillSet text='JavaScript' img={js}/>
           <SkillSet text='React Js' img={reacts}/>
           <SkillSet text='Tailwind' img={tw}/>
           <SkillSet text='Firebase' img={fb}/>
           <SkillSet text='Github' img={github}/>
           <SkillSet text='Next Js' img={nj}/>
        </div>
    </div>
    </div>
  )
}

export default Skills