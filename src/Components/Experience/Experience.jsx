import React from 'react'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import './Experience.css'

const Experience = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="experience" id='Experience'>
            <div className="achievement">
                <div className="circle">1+</div>
                <span style={{ color: darkMode ? 'white' : '' }}>Year </span>
                <span>Experience</span>
            </div>
            <div className="achievement">
                <div className="circle">5+</div>
                <span style={{ color: darkMode ? 'white' : '' }}>Completed </span>
                <span>Projects</span>
            </div>
            <div className="achievement">
                <div className="circle">3+</div>
                <span style={{ color: darkMode ? 'white' : '' }}>Companies </span>
                <span>Work</span>
            </div>
        </div>)
}

export default Experience