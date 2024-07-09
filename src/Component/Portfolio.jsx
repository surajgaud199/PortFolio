import React from 'react'
import html from "../assets/HTML.jpeg";
import css from "../assets/CSS.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import jquery from "../assets/jquery.png";

import { Link } from 'react-scroll';



function Portfolio() {
  const cardItem=[
    {
      id:1,
      logo:html,
      name:"HTML"
    },
    {
      id:2,
      logo:css,
      name:"CSS"
    },
    {
      id:3,
      logo:js,
      name:"js"
    },
    {
      id:4,
      logo:react,
      name:"react"
    },
    {
      id:5,
      logo:jquery,
      name:"jquery"
    },
    
  ]
  return (
    <>
    
      <div name="Portfolio"
       className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-10'>
        <div>
            <h4 className=' text-3xl font-bold mb-5'>Portfolio</h4>
            <span className=' underline font-semibold'>Featured Pojects</span>
            <div className=' grid grid-cols-1 md:grid-cols-4 gap-3 my-5'>
              {
                cardItem.map(({id,logo,name})=>(
                  <div className=' md:w-[250px] md:h-[250px]  border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
                       <img src={logo} className=' w-[100px] h-[100px] p-1 rounded-full border-[2px]' alt="comming soon👍" />
                       <div>
                          <div className=' px-2 font-bold text-xl mb-1'>{name}</div>
                          <p className='px-1 text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                       </div>
                       <div className=' space-x-3'>
                        <button className=' bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded'>Video</button>
                        <button type='submit' className=' bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded'><Link to={"https://github.com/surajgaud199/html"}>Source Code</Link></button>
                       </div>
                  </div>
                ))
              }
            </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio
