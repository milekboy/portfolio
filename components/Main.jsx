import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import Typewriter from 'typewriter-effect';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>LET'S BUILD SOMETHING TOGETHER</p>
                <h1 className='py-4 text-gray-700'>HI, I'm <span className='text-[#5651e5]'> Wahab</span></h1>
                <h1 className='py-2 text-gray-700'><Typewriter
                options={{
                    strings: [' A Frontend Developer', 'A Mobile App Developer', ' A Problem Solver', ' A Web Developer'],
                    autoStart: true,
                    loop: true,
                    delay: 90,
                  }}
                /> </h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                    I'm a self taught frontend web developer specializing in building exceptional digital experiences. Currently, I'm focused on building responsive front-end web applications while learning mobile app technologies.
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                <div className='rounded-full shadow-gray-400 shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:text-[#ecf0f3]'>
                   <a href='https://www.linkedin.com/in/wahab-tijani-b0167324b/'>
                   <FaLinkedinIn/>
                    </a> 
                </div>
                <div className='rounded-full shadow-gray-400 shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:text-[#ecf0f3]'>
                <a href='https://github.com/milekboy'>
                <FaGithub/>
                    </a> 
                   
                </div>
                <div className='rounded-full shadow-gray-400 shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:text-[#ecf0f3]'>
                <a href=''>
                <AiOutlineMail/>
                    </a> 
                   
                </div>
                <div className='rounded-full shadow-gray-400 shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:text-[#ecf0f3]'>
                <a href='https://twitter.com/milekdev'>
                <FaTwitter/>
                    </a> 
                    
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main