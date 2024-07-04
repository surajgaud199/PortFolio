import axios from 'axios';
import React from 'react'
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';

function Contact() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    const userInfo={
      name:data.name,
      email:data.email,
      message:data.message
    }
    try{
      await axios.post("https://getform.io/f/arolllrb",userInfo);
      toast.success("your message has been send")
    } catch(errors){
       console.log(errors);
       toast.error("something went wrong");
    }
  }

  return (
    <>
    
     <div name="Contacts"
      className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
       <h6 className=' text-3xl font-bold mb-4 '>Contact me</h6>
       <span>Please fill out the form below to contact me</span>
       <div className=' flex flex-col items-center justify-center mt-5'>
        <form 
              onSubmit={handleSubmit(onSubmit)}
              // action='https://getform.io/f/arolllrb'
              // method="POST"
         className='bg-slate-200 w-96 px-8 py-6 rounded-xl'>
            <h6 className=' text-xl font-semibold mb-4'>Send your message</h6>

            <div className=' flex flex-col mb-4'>
                <label className=' block text-gray-700'>FullName</label>
                <input
                   {...register("name", { required: true })}
                  className='shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='name'
                  name="name"
                 type="text"
                 placeholder='Entar your fullname' 
                 />
                 {errors.name && <span>This field is required</span>}
            </div>

            <div className=' flex flex-col mb-4'>
                <label className=' block text-gray-700'>Email Address</label>
                <input
                   {...register("email", { required: true })}
                  className='shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='name'
                  name="email"
                 type="text"
                 placeholder='Entar your EmailAddress' 
                 />
                 {errors.email && <span>This field is required</span>}

            </div>

            <div className=' flex flex-col mb-4'>
                <label className=' block text-gray-700'>Message</label>
                <textarea
                   {...register("message", { required: true })}
                  
                  className='shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='name'
                  name="message"
                  type="text"
                  placeholder='Entar your Query' 
                 />
                 {errors.message && <span>This field is required</span>}

            </div>
            <button type='submit' className=' bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300'>Send</button>

        </form>
       </div>
     </div>
    </>
  )
}

export default Contact
