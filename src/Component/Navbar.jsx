import React, { useState } from 'react'
import Photo from "../assets/Photo.png";  
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from 'react-scroll';


function Navbar() {
  const[menu, setMenu] = useState(false)
  const navItmes=[
    {
      id:1,
      text:"Home"
    },
    {
      id:2,
      text:"About"
    },
    {
      id:3,
      text:"Portfolio"
    },
    {
      id:4,
      text:"Experiance"
    },{
      id:5,
      text:"Contacts"
    },
    
  ]
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 bg-white'>
         <div className=' flex justify-between items-center h-16'>
          <div className=' flex space-x-2'>

            <img src={Photo}  className='h-12 w-12 rounded-full'  alt="" />

              <h1 className=' font-semibold text-xl  cursor-pointer'>
                sura<span className='text-green-500 text-2xl'>j</span>
                <p className=' text-sm'>Web Developer</p>
              </h1>  
          </div>
          {/* Desktop navbar */}
          <div>
            <ul className='hidden md:flex space-x-8'>
             {
              navItmes.map(({id,text})=>(
                <li  className=' hover:scale-105 duration-200 cursor-pointer' key={id}>
                  <Link to={text}
                        smooth={500}
                        offset={-70}
                        activeClass=' active'  >
                      {text}
                  </Link></li>
                  
              )
            )
             }
            </ul>
            <div onClick={()=>setMenu(!menu)} className='md:hidden'>
              {menu?<IoCloseOutline size={24} />:<AiOutlineMenu size={24}/>}</div>
          </div>
         </div>
         {/* Mobile navbar */}
         {
          menu && (
            <div className='bg-white'>
            <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl'>
            {
              navItmes.map(({id,text})=>(
                <li className=' hover:scale-105 duration-200 cursor-pointer font-semibold' key={id}>
                    <Link 
                        onClick={()=>setMenu(!menu)}
                        to={text}
                        smooth={500}
                        offset={-70}
                        activeClass=' active'  >
                      {text}
                  </Link>
                  </li>
              )
            )
             }
               </ul>
            </div>
          )
         }
         
      </div>
    </>
  )
}

export default Navbar
