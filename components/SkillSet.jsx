import React from 'react'
import Image from 'next/image'
const SkillSet = (props) => {
  return (
   

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 w-full'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image alt='/' src={props.img} width='64' height='64'/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>
                   {props.text}
                  </h3>
                </div>
                </div>
                </div> 

            
  )
}

export default SkillSet