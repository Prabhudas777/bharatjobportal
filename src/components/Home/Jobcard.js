import React from 'react'
import './Jobcard.css'

function Jobcard(props) {
  return (
    <div className='job-container'>
      <div className='logo-name'>
        <h1>{props.companyname}</h1>
      </div>
      <div>
        <h2 className='job-title'>{props.companyname} is hiring for Java Developer | Apply Now</h2>
        <div className='job-icon'>
            <p className='icon'>BharatJobPortal | </p>
            <p className='icon'>11 Seconds Ago | </p>
            <p className='icon'>0 | </p>
            <p className='icon'>4 mins</p>
        </div>
        <p>Join Telegram Channel! {props.companyname} is hiring for position of Java Developer</p>
        <button className='read-more-button'>Read More</button>
      </div>
    </div>
  )
}

export default Jobcard
