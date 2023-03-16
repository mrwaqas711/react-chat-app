import React from 'react'
import './Testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import profilePic1 from '../../img/profile1.jpg'
import profilePic2 from '../../img/profile2.jpg'
import profilePic3 from '../../img/profile3.jpg'
import profilePic4 from '../../img/profile4.jpg'
import { Pagination } from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css'

const Testimonial = () => {
    const clients = [
        {
            img: profilePic1,
            review:
                "Overall, I am extremely satisfied with the quality of work you delivered, and I would highly recommend your frontend developer service to anyone in need of a skilled and professional developer. I look forward to working with you again in the future.",
        },
        {
            img: profilePic2,
            review:
                "This frontend developer service is highly recommended for their exceptional attention to detail, ability to understand project needs, and impressive communication and collaboration skills. Their dedication to quality work and professionalism is impressive, and I am extremely satisfied with the results.",
        },
        {
            img: profilePic3,
            review:
                "This frontend developer is exceptional! They provided high-quality work, were attentive to details, and were professional throughout the project. I would highly recommend their service to anyone in need of a skilled and reliable frontend developer.",
        },
        {
            img: profilePic4,
            review:
                "This frontend developer is a standout in their field! Their work consistently exceeds expectations with meticulous attention to detail. Their clear communication and professionalism make for a seamless project experience. I would confidently recommend their frontend developer services to anyone in need of expert-level workmanship.",
        }
    ]
    return (
        <div className="t-wrapper" id='Testimonials'>
            <div className="t-heading">
                <span>Clients always get </span>
                <span>Exceptional Work </span>
                <span>from me...</span>
                <div className="blur t-blur1" style={{ background: 'var(--purple)' }}></div>
                <div className="blur t-blur2" style={{ background: 'skyblue' }}></div>
            </div>
            {/* slider */}
            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {clients.map((client, index) => (
                    <SwiperSlide key={index}>
                        <div className="testimonial">
                            <img src={client.img} alt="client" />
                            <span>{client.review}</span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Testimonial