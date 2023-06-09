import React from 'react'
import dashboardd from '../public/assets/projects/dashboard.png.png'
import Image from 'next/legacy/image'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'
const dashboard = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/>
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={dashboardd} alt='/'/>
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white p-2 z-10'>
              <h2 className='py-2'>Dashboard Website</h2>
              <h3>React / CSS</h3>
            </div>
        </div>
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 p-t-8'>
        <div className='col-span-4'>
        <p>Project </p>
        <h2>Overview</h2>
        <p>
          This app was built using React js.
         It is a dashboard website styled with Vanilla CSS. Building this project sharpened my ability to build complex designs as a frontend developer.
        </p>
        <a href='https://my-sample-dashboard.netlify.app'>
        <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
        </a>
        <a href='https://github.com/milekboy/dashboard'>
        <button className='px-8 py-2 mt-4 mr-8'>Code</button>
        </a>
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
                <RiRadioButtonFill className='pr-1'/> Vanilla CSS
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

export default dashboard