import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import profile from "../public/assets/My profile pic.jpg"
const About = () => {
  return (
    <div id='about' className='w-full m:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
                About
                </p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'>// I am not a normal developer</p>
                <p className='text-gray-600 py-2'>
                  I've spent my whole life developing myself as a valuable person, by acquiring formal education and skills needed to be relevant in the digital age. I have always had a knack for technology and working with computers. In 2022, I started working with html and css to make beautiful webpages out of fun. Then gradually, I started falling in love with programming.               </p>
                  <p className='py-2 text-gray-600'>
                    Fascinated with how intricate programming can be I was quickly drawn to learn more. I started learning JavaScript and was now interested with making websites interactive. And ever since then, I have not reduced my momentum in learning more useful tools to build 
                    sophisticated web experiences. I am currently spending my time building projects with React js, and lerning new technologies like React Native.                  </p>
                    <Link href='/#projects'>
                    <p className='underline text-gray-600 py-2 cursor-pointer'>Check out my latest projects.</p>
                    </Link>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
              <Image src={profile} alt="profile picture" width='350' height='50' className='rounded-xl' />
            </div>
        </div>
    </div>
  )
}

export default About