import React from 'react'
import html from "../assets/HTML.jpeg";
import css from "../assets/CSS.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import jquery from "../assets/jquery.png";
import bootstrap from "../assets/bootstrap.jpeg";
import wordpress from "../assets/wordpress.png";


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
      name:"react js"
    },
    {
      id:5,
      logo:jquery,
      name:"jquery"
    },
    {
      id:6,
      logo:bootstrap,
      name:"bootstrap"
    },
    {
      id:7,
      logo:wordpress,
      name:"wordpress"
    },
    
  ]
  return (
    <>
    
      <div name= "Experiance"
       className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
        <div>
            <h4 className=' text-3xl font-bold mb-5'>Expriance</h4>
            <p className=''>I am Fresher 😊</p>
            <div className=' grid grid-cols-2 md:grid-cols-5 gap-7 my-3'>
              {
                cardItem.map(({id,logo,name})=>(
                  <div 
                  className=' mb-4  flex flex-col items-center justify-center  md:w-[200px] md:h[200px]   rounded-full   p-1 cursor-pointer hover:scale-110 duration-300' 
                   key={id}>
                       <img src={logo} className=' w-[150px]  rounded-full ' alt="comming soon👍" />
                       <div>
                          <div className=' px-2 font-bold text-xl mb-1'>{name}</div>
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
