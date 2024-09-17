import React from 'react'
import profilepicture from '../src/assets/images/bibin.jpg'

function Hero() {
    return (
        <div class="container-fluid bg-primary d-flex align-items-center mb-3 py-5 " id='home' style={{ "minHeight": "100vh"  }}>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 text-left text-lg-left"><br /><br /><br />
                        <h2 class="text-white font-weight-normal mb-3">Hey,   I'm</h2>
                        <h1 class="text-white text-uppercase fw-bold mb-2">Bibin KU</h1>
                        <h1 class="typed-text-output d-inline font-weight-lighter text-white"></h1>
                        <div class="typed-text text-white"><h4>Python Fullstack Web Developer</h4></div>
                        <div class="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
                            <a href="#" class="btn btn-white mr-4">Download CV</a>
                            <a href="#" class="btn btn-blue d-none d-sm-block">Play Video</a>
                        </div>
                    </div>
                    <div class="col-lg-6 px-8 pl-lg-0 pb-5 pb-lg-4 pt-5 about-img">
                        <img src={profilepicture} class="img-fluid w-500 rounded-circle shadow-sm" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
