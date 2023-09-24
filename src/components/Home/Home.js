import React from 'react'
import Jobcard from './Jobcard'
import  './Home.css'

function Home() {
  
  return (
    <div className='home-container'>
      <Jobcard companyname={"Accenture"}/>
      <Jobcard companyname={"Capgemini"}/>
      <Jobcard companyname={"Broadridge"}/>
      <Jobcard companyname={"LTI Mindtree"}/>
      <Jobcard companyname={"Cognizant"}/>
      <Jobcard companyname={"Digit"}/>
      <Jobcard companyname={"ADP"}/>
    </div>
  )
}

export default Home
