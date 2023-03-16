import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'
import { UilWhatsapp } from '@iconscout/react-unicons'
import Linkedin from '../../img/linkedIn.png'



const Footer = () => {
    return (
        <div className="footer">
            <img src={Wave} alt="wave" style={{ width: '100%', height: "30vh" }} />
            <div className="f-content">
                <div className="f-icons">
                    <a href="https://github.com/mrwaqas711">
                        <Github color="white" size="3rem" />
                    </a>
                    <a href="https://www.linkedin.com/in/muhammad-waqas-510542235/">
                        <img src={Linkedin} alt="linkedin" style={{ width: '3rem' }} />
                    </a>
                    <a href="https://wa.me/+923119721779" target='_blank'>
                        <UilWhatsapp width="3rem" height="3rem" color="white" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer