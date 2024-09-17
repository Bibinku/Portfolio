import React from 'react'
import insta from '../src/assets/images/linnked2.webp'
import github from '../src/assets/images/github.ico'

function Navbar() {
  return (
    <div>
      <nav class="navbar fixed-top shadow-sm navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5"  >
        <a href="index.html"  class="navbar-brand ml-lg-3 p-3" style={{marginRight:'150px'}} >
            <h1 class="m-0 display-5"><span class="text-primary">Port</span>Folio</h1>
        </a>
        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse px-lg-3" id="navbarCollapse" >
            <div class="navbar-nav m-auto py-0">
                <a href="#home" class="nav-item nav-link active">Home</a>
                <a href="#about" class="nav-item nav-link">About</a>
                <a href="#internship" class="nav-item nav-link">Internship</a>
                <a href="#qualification" class="nav-item nav-link">Education</a>
                <a href="#project" class="nav-item nav-link">Project</a>
                <a href="#skills" class="nav-item nav-link">Skills</a>
                
                <a href="#certification" class="nav-item nav-link">Certification</a>
                <a href="#contact" class="nav-item nav-link" style={{marginRight:'80px'}} >Contact</a><br />


                <div>
                 <a href="https://www.linkedin.com/in/bibin-k-u-2859852b4/">
                     <img src={insta} alt="" style={{width:'38px',height:'38px',marginLeft:'120px'}} />
                 </a>
                </div>

                <div>
                 <a href="#">
                     <img src={github} alt="" style={{width:'38px',height:'38px',marginLeft:'10px'}} />
                 </a>
                </div>
                

                
             

            </div>
        </div>
    </nav>
   
    </div>
  )
}

export default Navbar
