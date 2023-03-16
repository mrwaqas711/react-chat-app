import React from 'react'
import './Work.css'
import Upwork from "../../img/Upwork.png"
import Fiverr from "../../img/fiverr.png"
import Amazon from "../../img/amazon.png"
import Shopify from "../../img/Shopify.png"
import Facebook from "../../img/Facebook.png"
import { themeContext } from '../../Context'
import { useContext } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

const Work = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="works">
            <div className="awesome">
                <span style={{ color: darkMode ? 'white' : '' }}>Works for All these</span>
                <span>Clients</span>
                <span>
                    As a frontend developer, I have consistently received <br />
                    high praise from my clients for my exceptional <br /> attention
                    to detail, professionalism, and ability to <br /> understand their
                    unique project needs. I have been <br /> able to create visually stunning websites that
                    not only <br /> look great but also function exceptionally well.
                    My <br /> clients have expressed extreme satisfaction with the <br /> end
                    results and frequently recommend my frontend <br /> developer services
                    to others seeking a highly skilled <br /> and reliable developer.
                </span>
                <Link spy={true} smooth={true} to='Contact'>
                    <button className='button s-button'>Hire me</button>
                </Link>
                <div className="blur s-blur1" style={{ background: '#abf1ff94' }}></div>
            </div>

            {/* right side */}
            <div className="w-right">
                <motion.div
                    initial={{ rotate: 75 }}
                    whileInView={{ rotate: 0 }}
                    viewport={{ margin: "-40px" }}
                    transition={{ duration: 3.5, type: "spring" }}
                    className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Upwork} alt="upwork" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiverr} alt="fiverr" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} alt="amazon" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Shopify} alt="shopify" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} alt="facebook" />
                    </div>
                </motion.div>
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
        </div>)
}

export default Work