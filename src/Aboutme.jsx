import React from 'react';
import pic from '../src/assets/images/bibin.jpg'

function Aboutme({user}) {
    return (
        <div>
             <div class="container-fluid py-5" id="about">
            <div class="container">
                <div class="position-relative d-flex align-items-center justify-content-center">
                    <h1 class="display-1 text-uppercase text-white" >About</h1>
                    <h1 class="position-absolute text-uppercase text-primary">About Me</h1>
                </div>
                <div class="row align-items-center">
                    <div class="col-lg-5 pb-4 pb-lg-0">
                        <img class="img-fluid rounded w-100" src={pic} alt="" />
                    </div>
                    <div class="col-lg-7">
                        <h3 class="mb-4">Python Fullstack Developer</h3>
                        <p>Motivated Full-Stack Developer with strong expertise in Django and Python, seeking an opportunity to leverage and enhance my skills through an internship. Passionate about contributing to innovative and scalable web solutions.</p><br />
                        <div class="row mb-3">
                            <div class="col-sm-6 py-2"><h6>Name: <span class="text-secondary">{user.name}</span></h6></div>
                            <div class="col-sm-6 py-2"><h6>DOB: <span class="text-secondary">{user.dob}</span></h6></div>
                            <div class="col-sm-6 py-2"><h6>Education: <span class="text-secondary">{user.degree}</span></h6></div>
                            <div class="col-sm-6 py-2"><h6>Experience: <span class="text-secondary">{user.exp}</span></h6></div>
                            <div class="col-sm-6 py-2"><h6>Phone: <span class="text-secondary">{user.mobile}</span></h6></div>
                            <div class="col-sm-6 py-2"><h6>Email: <span class="text-secondary">{user.email}</span></h6></div>
                            <div class="col-sm-6 py-2"><h6>Address: <span class="text-secondary">{user.address}</span></h6></div>
                            <div class="col-sm-6 py-2"><h6>Freelance: <span class="text-secondary">Available</span></h6></div>
                        </div>
                        <a href="" class="btn blue btn-outline-primary mr-4">Download CV</a>                   </div>
                </div>
            </div>
        </div>
        </div>
      )
}

export default Aboutme