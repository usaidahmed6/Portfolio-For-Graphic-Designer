import React from 'react'
import '../style/Experience.css'
import SkillsAndTools from './SkillsAndTools';
import { LeftCircleOutlined } from '@ant-design/icons';
import Footer from './Footer';


const Experience = () => {
    return (
        <SkillsAndTools>
            <div className='experience-container' id='WorkExperience'>
                <h2 className='Heading'>Work Experience</h2>
                <div className='experience-main'>
                    <div className='experience-content' data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom">
                        <div className='dis-inline'>
                            <LeftCircleOutlined style={{ fontSize: '70px', color: '#a1a5a7' }} />
                        </div>
                        <div className='dis-inline' >
                            <p style={{ color: '#FEE5B5' }}>Senior Creative Graphic Designer </p>
                            <p style={{ color: '#fff' }}>2016 PRESENT </p>
                            <p style={{ color: '#a1a5a7' }}>CATCH CREATIVE IDEAS</p>
                        </div>
                        <div className='dis-inline' >
                            <p style={{ color: '#FEE5B5' }}>January 2016 - Current</p>
                            <p style={{ color: '#fff' }}>Full-Time</p>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </SkillsAndTools>
    )
}

export default Experience
