import React from 'react'
import SkillSet from './SkillSet'

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
            <h2 className='py-4'>What I can do</h2>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 '>
           <SkillSet text='HTML' img='/../public/assets/skills/html.png'/>
           <SkillSet text='CSS' img='/../public/assets/skills/css.png'/>
           <SkillSet text='JavaScript' img='/../public/assets/skills/javascript.png'/>
           <SkillSet text='React Js' img='/../public/assets/skills/react.png'/>
           <SkillSet text='Tailwind' img='/../public/assets/skills/tailwind.png'/>
           <SkillSet text='Firebase' img='/../public/assets/skills/firebase.png'/>
           <SkillSet text='Github' img='/../public/assets/skills/github1.png'/>
           <SkillSet text='Next Js' img='/../public/assets/skills/nextjs.png'/>
        </div>
    </div>
    </div>
  )
}

export default Skills