import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import { UilWhatsapp } from '@iconscout/react-unicons'
import LinkedIn from '../../img/linkedin.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import waqas from '../../img/waqas.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

const Intro = () => {
    const transition = { duration: 2, type: "spring" };
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={{ color: darkMode ? 'white' : '' }}>Hey! I Am </span>
                    <span>Muhammad Waqas </span>
                    <span>Frontend Developer with
                        high level of experience
                        in web designing and development,
                        producting the quality work.
                    </span>
                </div>
                <Link spy={true} smooth={true} to='Contact'>
                    <button className="button i-button">
                        Hire me
                    </button>
                </Link>
                <div className="i-icons">
                    <a href="https://github.com/mrwaqas711">
                        <img src={Github} alt="github" />
                    </a>
                    <a href="https://www.linkedin.com/in/muhammad-waqas-510542235/">
                        <img src={LinkedIn} alt="linkedin" />
                    </a>
                    <a href="https://wa.me/+923119721779" target='_blank'>
                        <UilWhatsapp color='#FCA61F' width='5rem' height='5rem' />
                    </a>
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="vector1" />
                <img src={Vector2} alt="vector2" />
                <img src={waqas} alt="waqas" />
                <motion.img
                    initial={{ left: "-36%" }}
                    whileInView={{ left: "-24%" }}
                    transition={transition}
                    src={glassesimoji} alt="glass" />
                <motion.div
                    initial={{ top: "-4%", left: "74%" }}
                    whileInView={{ left: "68%" }}
                    transition={transition}
                    style={{ top: '-4%', left: '74%' }}
                    className="floating-div"
                >
                    <FloatingDiv image={Crown} txt1="web" txt2="developer" />
                </motion.div>
                <motion.div
                    initial={{ left: "9rem", top: "18rem" }}
                    whileInView={{ left: "0rem" }}
                    transition={transition}
                    style={{ top: '18rem', left: '9rem' }}
                    className="floating-div"
                >
                    <FloatingDiv image={thumbup} txt1="Best Design" txt2="Award" />
                </motion.div>
                {/* blur div */}
                <div className='blur' style={{ background: "rgb(238 210 255)" }}>
                </div>
                <div className='blur' style={{ background: '#c1f5ff', top: '17rem', width: '21rem', height: '11rem', left: '-9rem' }}></div>

            </div>
        </div >
    )
}

export default Intro