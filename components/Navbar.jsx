import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} 
from 'react-icons/ai'
import {FaGithub, FaLinkedinIn, FaTwitter, FaMoon, FaSun} from 'react-icons/fa'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes';
const Navbar = () => {
   const {  theme, setTheme } = useTheme('light');
  const [mounted, setMounted] = useState(false);
  const [navBg, setNavBg]=useState('#383737')
  const [linkColor, setLinkcolor]= useState('')
  const[nav, setNav]= useState(false);
  const [shadow, setShadow ]= useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  
  const router = useRouter()

  useEffect(()=>{
      if(
       router.asPath === '/dice'||  
       router.asPath === '/love'||
       router.asPath === '/redabear'||
       router.asPath === '/dashboard'
      ) {
          setNavBg('transparent')
          setLinkcolor('#ecf0f3')
      } 
      else if( 
        theme === 'dark' 
      
      ){
        setNavBg('#383737')
        setLinkcolor('#ecf0f3')
      } 
      else if( 
        theme === 'light' 
      
      ){
        setNavBg('#ecf0f3')
        setLinkcolor('#1f2937')
      }
   
  },[router, theme])
  
  useEffect(()=>{
    const handleShadow =()=>{
      if (window.scrollY >= 90){
          setShadow(true);
      } else {
          setShadow(false);
      }
    } 
    window.addEventListener('scroll', handleShadow)
  }, [])

  if (!mounted) return null;
  const currentTheme = theme;


    const handleNav = () => {
        setNav(!nav)
    };
   const setHandler=()=>{
    setTheme('dark')
    // setNavBg('#383737')
   }
   const setHandlers=()=>{
    setTheme('light')
    // setNavBg('#ecf0f3')
   }
    return (
        <div style={{backgroundColor: `${navBg} `}} className={  shadow?  ' fixed w-full h-20 shadow-xl z-[100]': 'fixed w-full h-20 z-[100]'}>
            <div className='flex justify-between  items-center w-full h-full px-2 2xl:px-16 z-[100] '>
                <Link href='/'>
                {/* <Image src={logo} alt='/' width='80' height='50' /> */}
                <h1 className='text-[#5651e5] dark:text-[#5651e5] '>W.</h1>
                </Link>
                <div>
                    <ul style={{ color: `${linkColor}`}} className='hidden md:flex'>
                        <Link href='/'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                        </Link>
                        <Link href='/#about
                        '>
                            <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                        </Link>
                        <Link href='/#skills'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                        </Link>
                        <Link href='/#projects'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                        </Link>
                        <Link href='/#contact'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                        </Link>
                        {currentTheme === 'dark' ? (
                        <li className='ml-10 text-bg uppercase hover:border-b' onClick={
                setHandlers
               }> 
              <FaSun/> 
              </li>
             ) : (
            <li className='ml-10 text-sm uppercase hover:border-b' onClick={
                setHandler
               }> 
              <FaMoon/>
          </li>
          )}
          </ul>
                    <div className='md:hidden cursor-pointer dark:text-white'>
                         <AiOutlineMenu onClick={handleNav} size={25}/>
                    </div>
                </div>
            </div>
            <div className={nav? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''} >
                <div className={nav? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 dark:bg-[#383737]': 'fixed left-[-100%] top-0 p-10 ease-in-duration-500 '}>
                    <div className='flex w-full items-center justify-between'>
                        <div >
                            <Link href='/'>
                            <h1 className='text-[#5651e5] dark:text-[#5651e5]'>W.</h1>
                        </Link>
                        </div>
                        <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer dark:text-white'>
                            <AiOutlineClose/>
                        </div>
                    </div>
                    <div className='border-b border-gray-300 my-4'>
                        <p className='w-[85%] md:w[90%] py-4'>Let's build something legendary together</p>
                    </div>
                    <div className='pt-0 flex flex-col'>
                    <ul className='uppercase'>
                        <Link href='/'>
                        <li onClick={()=> setNav(false)} className='py-4 text-sm'> Home </li>
                        </Link>
                        <Link href='/#about'>
                        <li onClick={()=> setNav(false)} className='py-4 text-sm'> About </li>
                        </Link>
                        <Link href='/#skills'>
                        <li onClick={()=> setNav(false)} className='py-4 text-sm'> Skills</li>
                        </Link>
                        <Link href='/#projects'>
                        <li onClick={()=> setNav(false)} className='py-4 text-sm'> Projects</li>
                        </Link>
                        <Link href='/#contact'>
                        <li onClick={()=> setNav(false)} className='py-4 text-sm'>Contact </li>
                        </Link>
                        {currentTheme === 'dark' ? (
                        <li className='py-4 text-xl' onClick={
                setHandlers
               }> 
              <FaSun/>
              </li>
             ) : (
            <li className='py-4 text-xl' onClick={
                setHandler
               }> 
              <FaMoon/>
          </li>
          )}
                    </ul>
                    <div className='pt-16'>
                    <p className='uppercase tracking-widest text-[#5651e5]'>Let's Connect</p>
                    <div className='flex item-center justify-between my-4 w-full sm:w-[80%]'>
                        <div className='rounded-full shadow-gray-400 shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300 dark:text-[#ecf0f3]'>
                        <a href='https://www.linkedin.com/in/wahab-tijani-b0167324b/'>
                   <FaLinkedinIn/>
                    </a> 
                        </div>
                        <div className='rounded-full shadow-gray-400 shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300 dark:text-[#ecf0f3]'>
                        <a href='https://github.com/milekboy'>
                <FaGithub/>
                    </a> 
                        </div>
                        <div className='rounded-full shadow-gray-400 shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300 dark:text-[#ecf0f3]'>
                        <a href=''>
                <AiOutlineMail/>
                    </a> 
                        </div>
                        <div className='rounded-full shadow-gray-400 shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300 dark:text-[#ecf0f3]'>
                        <a href='https://twitter.com/milekdev'>
                <FaTwitter/>
                    </a> 
                        </div>
                    </div>
                    </div>
                </div>
                </div>
               
            </div>
        </div>
    )
}

export default Navbar