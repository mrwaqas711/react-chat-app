import React from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Contact = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const form = useRef();
    const [done, setDone] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_vzmf778', 'template_qx0z2kk', form.current, 'vTyn_TAJ5V0aIMtyS')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="contact-form" id='Contact'>
            <div className="w-left">
                <div className="awesome">
                    <span style={{ color: darkMode ? 'white' : '' }}>Get in Touch</span>
                    <span>Contact me</span>
                    <div className="blur s-blur1" style={{ baclground: 'skyblue' }}
                    >
                    </div>
                </div>
            </div>
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='user_name' className='user' placeholder='Name' required={true} />
                    <input type="email" name='user_email' className='user' placeholder='Email' required={true} />
                    <textarea name='message' className='user' placeholder='Message' required={true} />
                    <input type="submit" value="Send" className="button" />
                    <span>{done && "Thanks for Contacting me"}</span>
                    <div className="blur c-blur1" style={{ background: 'var(--purple)' }}></div>
                </form>
            </div>
        </div>
    )
}

export default Contact