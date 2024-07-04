import React from 'react'

import Photo from "../assets/images.jpeg";


import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { SiJquery } from "react-icons/si";

import { ReactTyped} from "react-typed";


function Home() {
  return (
    <>
    
      <div name= "Home"
       className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
        <div className=' flex flex-col md:flex-row'>
           <div className=' md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
              <span className=' text-xl'>Welcome In My Feed</span>
                <div className=' flex space-x-1 text-2xl md:text-4xl'>
                  <h1>Hello, I'm a</h1>
                  <ReactTyped
                     className=' text-red-700 font-bold'
                     strings={["Developer","Programmer", "Coder"]}
                     typeSpeed={40}
                     backSpeed={50}
                     loop={true}
                     />
                  {/* <span className=' text-red-700 font-bold'>Developer</span> */}
               </div>
               <br/> 
              <p className=' text-sm md:text-md text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Possimus est corporis laboriosam consequatur iste asperiores 
                beatae voluptates eos, sint aspernatur, maiores fugit iusto 
                corrupti quaerat. Laudantium deleniti repellat vero maxime unde
                necessitatibus consequuntur totam placeat dolor nostrum, 
                natus sapiente voluptatum.</p>
                <br/>
                {/* Social media icons */}
                <div className=' flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0'>
                <div className=' space-y-2'>
                    <h2 className=' font-bold'>Available on</h2>
                      <ul className=' flex space-x-5'>
                         <li>
                            <a href='https://www.facebook.com/login/' target= '_blank'> 
                            <FaFacebookSquare className=' text-2xl cursor-pointer'/>
                            </a>
                            </li>
                         <li>
                            <a href='https://www.linkedin.com/login' target='_blank'>
                            <FaLinkedin className=' text-2xl cursor-pointer' />
                            </a>
                            </li>
                         <li>
                            <a href='https://www.instagram.com/accounts/login/?hl=en' target='_blank'>
                            <FaInstagramSquare className=' text-2xl cursor-pointer' />
                            </a>
                            </li>
                         <li>
                            <a href='https://www.google.com/' target='_blank'>
                            <FaGoogle className=' text-2xl cursor-pointer' />
                            </a>
                            </li>
                      </ul>
                </div>
                <div className=' space-y-2'>
                <h2 className=' font-bold'>Currently working on</h2>
                      <div className=' flex space-x-5'>
                        <IoLogoHtml5 className=' text- xl: md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                        <IoLogoCss3 className=' text- xl: md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                        <IoLogoJavascript className='  text- xl: md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                        <FaReact className='  text- xl: md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                        <SiJquery className=' text- xl: md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />

                      </div> 
                </div>
                </div>
           </div>
           <div className=' md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1'>

              <img className='md:h-[450px] md:w-[450px] rounded-full' src={Photo} alt="" />

           </div>
        </div>
      </div>
      <hr/>
    </>
  )
}

export default Home
