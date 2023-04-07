
import React, {useState} from 'react'
import contact from '../public/assets/contact.jpg'
import Image from 'next/image'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import Link from 'next/link'

const Contact = (props) => {
    const iniState={
        name:'',
        phone:'',
        email:'',
        subject:'',
        message:''
    }
    const[data, setData]= useState( iniState);
   const handleChange=(e)=>{
    e.persist();
    setData((oldState)=>({
        ...oldState,[e.target.name]: e.target.value,
    }))
   }
   
 const postDataHandler =async(event)=>{
    event.preventDefault();
      await props.postData(data);
      setData( iniState);
  }

  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contact</p>
            <h2 className='py-4'>Get In Touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
                {/* left */}
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='lg:p-4 h-full '>
                    <div>
                        <Image className='rounded-xl hover:scale-105 ease-in duration-300' src={contact} alt='contact me image'/>
                    </div>
                    <div>
                        <h2>Wahab</h2>
                        <p>Front-End Developer</p>
                        <p className='py-4'>I am available for freelance or full-time positions. Contact me and let's talk. </p>
                    </div>
                    <div>
                        <p className='uppercase pt-8'>Connect With Me </p>
                        <div className='flex items-center justify-between py-4'>
                        <a href='https://www.linkedin.com/in/wahab-tijani-b0167324b/'>
                        <div className='rounded-full shadow-gray-400 shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:text-[#ecf0f3]'>
                    <FaLinkedinIn/>
                </div>
                </a>
                <a href='https://github.com/milekboy'>
                <div className='rounded-full shadow-gray-400 shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:text-[#ecf0f3]'>
                    <FaGithub/>
                </div>
                </a>
                <a href=''>
                <div className='rounded-full shadow-gray-400 shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:text-[#ecf0f3]'>
                    <AiOutlineMail/>
                </div>
                </a>
                <a href='https://twitter.com/milekdev'>
                <div className='rounded-full shadow-gray-400 shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:text-[#ecf0f3]'>
                    <FaTwitter/>
                </div> 
                </a>
                        </div>
                    </div>
                </div>
                 

                </div>
                {/* right */}
                <div className='col-span-3 w-full shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <div className='p-4'>
                       <form onSubmit={postDataHandler}
                        >
                        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Name</label>
                                <input 
                                name='name'
                                value={data.name} 
                                onChange={handleChange}  className='border-2 rounded-lg p-3 flex border-gray-300' type='text'  required/>
                            </div>
                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Phone Number</label>
                                <input 
                                name='phone'
                                value={data.phone} 
                                onChange={handleChange}         className='border-2 rounded-lg p-3 flex border-gray-300' type='text' required/>
                            </div>
                        </div>
                        <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm py-2'>Email</label>
                        <input 
                        name='email'
                        value={data.email} 
                                 onChange={handleChange} className='border-2 rounded-lg p-3 flex border-gray-300' type='email' required/>
                        </div>
                        <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm py-2' required>Subject</label>
                        <input 
                        name='subject'
                        value={data.subject} 
                                onChange={handleChange}  className='border-2 rounded-lg p-3 flex border-gray-300' type='text'/>
                        </div>
                        <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm py-2'>Message</label>
                     <textarea 
                     name='message'
                     value={data.message} 
                                 onChange={handleChange} className='border-2 rounded-lg p-3 border-gray-300' rows='10'></textarea>
                        </div>
                        <button   className='w-full p-4 text-gray-100 mt-4 ' >Send Message</button>
                        </form>     
                    </div>
                </div>
            </div>
           <div className='flex justify-center py-12'>
            <Link href=''>
            <div className='rounded-full shadow-gray-400 shadow-lg p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30}/>
            </div>
            </Link>
            </div> 
        </div>
    </div>
  )
}

export default Contact