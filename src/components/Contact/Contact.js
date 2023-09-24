import React from 'react'
import { useForm } from "react-hook-form";
import './Contact.css'

function Contact() {

  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className='contact-container'>
      <h1 className='contact-heading'>Contact Us</h1>
      <p>Contact us : bharatjobportal@gmail.com</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <p>Name(required)</p>
          <input {...register("name")} className='input'/>
        </div>
        <div>
          <p>Email(required)</p>
          <input {...register("email")} className='input'/>
        </div>
        <div>
          <p>Message</p>
          <textarea type='text-area' {...register("message")} className='message'/>
        </div>
      <button className="btn">Contact Us</button>
    </form>
    </div>
  )
}

export default Contact
