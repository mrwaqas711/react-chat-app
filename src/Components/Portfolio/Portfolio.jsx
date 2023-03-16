import React from 'react'
import './Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import Clearstake from '../../img/clearstake.png'
import Sincera from '../../img/Sincera.png'
import Golearn from '../../img/golearn.png'
import Sneakygoblins from '../../img/sneakygoblins.png'
import Todo from '../../img/todoapp.png'
import 'swiper/css'
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="portfolio" id='Portfolio'>
            {/* heading */}
            <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
            <span>Portfolio</span>

            {/* slider */}
            <Swiper
                spaceBetween={70}
                slidesPerView={4}
                grabCursor={true}
                className='portfolio-slider'
            >
                <SwiperSlide>
                    <img src={Golearn} alt="sidebar" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Sneakygoblins} alt="hoc" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Clearstake} alt="ecommerce" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Sincera} alt="musicapp" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Todo} alt="hoc" />
                </SwiperSlide>
            </Swiper>
        </div>)
}

export default Portfolio