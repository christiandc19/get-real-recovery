import React from 'react'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import './Hero.css'

import BgVideo from '../../assets/Bg-Video.mp4'



const Hero = () => {
    return (
<>        

        <div className='hero'>
            <video src={BgVideo} autoPlay muted loop playsInline className='video-bg' />



            <div className="hero-container">

                <div className="content">
                    

                        <h1 className="animated-text">Get Real Recovery</h1>
                    <Fade left>
                        <h2>SUPPORT. TRANSFORM. HEAL.</h2>
                        <p> "Empowering Minds, Renewing Lives."</p>
                    </Fade>
                        <div className='hero-btn'>
                        <Link to="/contact">
                        <button>Contact Us</button>
                    </Link>
                            <div>
                        </div>
                    </div>
                    <br />
                </div>
            </div>
        </div>


</>

    )
}

export default Hero