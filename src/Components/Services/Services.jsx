import React from 'react'
import './Services.css'
import Heartemoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import Resume from './Resume.pdf'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import { motion } from 'framer-motion'


const Services = () => {
    const transition = { duration: 2, type: 'spring' }
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className='services' id='Services'>
            {/* left side */}
            <div className="awesome">
                <span style={{ color: darkMode ? 'white' : '' }}>My Awesome</span>
                <span>Services</span>
                <span>
                    As a frontend developer, I possess a wealth of experience in designing <br />
                    and developing web applications. I am dedicated to delivering top-quality <br />
                    work that meets the needs of my clients. My focus is on producing engaging <br />
                    and user-friendly online experiences that are visually appealing and <br />
                    intuitive to use.
                </span>
                <a href={Resume} download>
                    <button className='button s-button'>Download CV</button>
                </a>
                <div className="blur s-blur1" style={{ background: '#abf1ff94' }}></div>
            </div>
            {/* right side */}
            <div className="cards">
                <motion.div
                    whileInView={{ left: '14rem' }}
                    initial={{ left: '25rem' }}
                    transition={transition}
                >
                    <Card
                        emoji={Heartemoji}
                        heading={'Design'}
                        detail={"I'll create engaging online experiences that are effective and easy to use."}
                    />
                </motion.div>
                <motion.div
                    initial={{ left: '-11rem', top: '12rem' }}
                    whileInView={{ left: '-4rem' }}
                    transition={transition}
                    style={{ top: '12rem' }}>
                    <Card
                        emoji={Glasses}
                        heading={'Developer'}
                        detail={"Html, Css, JavaScript, React, Ruby on Rails, Bootstrap"}
                    />
                </motion.div>
                <motion.div
                    initial={{ top: "19rem", left: "25rem" }}
                    whileInView={{ left: "12rem" }}
                    transition={transition}
                    style={{ top: '19rem' }}>
                    <Card
                        emoji={Humble}
                        heading={'UI/UX'}
                        detail={"As a UI/UX designer, my job is to create visually appealing and user-friendly digital interfaces."}
                    />
                </motion.div>
                <div className="blur s-blur2" style={{ background: 'var(--purple)' }}></div>

            </div>
        </div>
    )
}

export default Services