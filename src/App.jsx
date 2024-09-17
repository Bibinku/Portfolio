import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Aboutme from './Aboutme'
import Skills from './Skills'
import Education from './Education'

import Project from './Project'
import Intership from './Intership'
import Certification from './Certification'


function App() {

  const user={"name":"Bibin K U",
              "degree":"Bsc Mathematics",
              "mobile": "8078164113",
              "address":"Alappuzha,Kerala",
              "dob":"09/10/2000",
              "exp":"Fresher",
              "email":"bibinku01@gmail.com"


}
const skillset=[
  {"name":"Python","percentage":"90%"},
  {"name":"HTML","percentage":"95%"},
  {"name":"CSS","percentage":"90%"},
  
  {"name":"Django","percentage":"95%"},
  {"name":"Javascript","percentage":"80%"},
  {"name":"MySQL","percentage":"80%"},
  


]
   

  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Aboutme user={user}></Aboutme>
      <Intership></Intership>
      <Education></Education>
      <Project></Project>
      <Skills skillset={skillset}></Skills>
      <Certification></Certification>
      
      
      
     
      

     
      
    </div>
  )
}

export default App
