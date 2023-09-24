import React from 'react'
import Jobcard from '../Home/Jobcard'

function internship() {
  return (
    <div>
      <h3>Internships</h3>
      <Jobcard companyname={"Digit"}/>    
      <Jobcard companyname={"LTI Mindtree"}/>
      <Jobcard companyname={"Cognizant"}/>
      <Jobcard companyname={"ADP"}/>
    </div>
  )
}

export default internship
