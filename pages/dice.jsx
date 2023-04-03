import React from 'react'
import dicee from '../public/assets/projects/dice.png.png'
import Image from 'next/legacy/image'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'
const dice = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/>
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={dicee} alt='/'/>
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white p-2 z-10'>
              <h2 className='py-2'>Dice Game Simulation</h2>
              <h3>React / Bootstrap</h3>
            </div>
        </div>
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 p-t-8'>
        <div className='col-span-4'>
        <p>Project </p>
        <h2>Overview</h2>
        <p>
          This app was built using React js.
          It is a virtual Dice game where two players are able to compete against each other. The winner is the first player to cross ten points.
          It has a captivating and understandable  user interface.
          It also has a backgroud music feature which can be turned on and off based on the player's preference.
        </p>
        <a href='https://milek-dice-game.netlify.app/'><button className='px-8 py-2 mt-4 mr-8'>Demo</button></a>
       <a href='https://github.com/milekboy/dice-game'><button className='px-8 py-2 mt-4 mr-8'>Code</button></a> 
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center '>
                <RiRadioButtonFill className='pr-1'/> React
              </p>
              <p className='text-gray-600 py-2 flex items-center '>
                <RiRadioButtonFill className='pr-1'/> JavaScript
              </p>
              <p className='text-gray-600 py-2 flex items-center '>
                <RiRadioButtonFill className='pr-1'/> Bootstrap
              </p>
              <p className='text-gray-600 py-2 flex items-center '>
                <RiRadioButtonFill className='pr-1'/> React Howler
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>

      </div>
    </div>
  )
}

export default dice