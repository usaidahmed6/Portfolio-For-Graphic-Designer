import React from 'react';
import Header from './Header.jsx'
import '../style/Introduction.css';
import userImage1 from '../images/hamza1.jpg'
import { FacebookOutlined, LinkedinOutlined, BehanceSquareOutlined } from '@ant-design/icons';

const Introduction = () => {


    return (
        <>
            <div className='main'>
                <div className='circleDiv'>
                    <Header />
                    <div className="introContainer">
                        <div className='left'>

                            <b className='color-yellow'>

                                Hello I'm
                            </b>
                            <br />
                            <span className='name font-family'>
                                Ameer Hamza
                            </span>
                            <br />
                            <b className='text-light size'>
                                — Creative Graphic Designer
                            </b>
                            <div className='social-icons'>

                                <a href="https://www.facebook.com/ameer.hamza.5203577" target='_blank'>
                                    <FacebookOutlined style={{ fontSize: '40px', color: '#fee5b5', margin: '25px 10px' }} />
                                </a>

                                <a href="https://www.linkedin.com/in/ameer-hamza-a5327a18a/" target="_blank">
                                    <LinkedinOutlined style={{ fontSize: '40px', color: '#fee5b5', margin: '25px 10px' }} />
                                </a>

                                <a href="https://www.behance.net/ameerhamza241ae562" target="_blank">
                                    <BehanceSquareOutlined style={{ fontSize: '40px', color: '#fee5b5', margin: '25px 10px' }} />
                                </a>


                            </div>

                        </div>
                        <div className='right' data-aos="zoom-in"
                            data-aos-duration="2500"
                        >
                            <img src={userImage1} alt="image" className='userImage' />
                        </div>
                    </div>

                </div>
            </div>

            {/* <div className='responsive-section'> 
                <Header />

                <div className='dis-felx-resp'>
                    <div>

                        <b className='color-yellow'>

                            Hello I'm
                        </b>
                        <br />
                        <span className='name font-family'>
                            Ameer Hamza
                        </span>
                        <br />
                        <b className='text-light size'>
                            — Creative Graphic Designer
                        </b>
                        <div className='social-icons'>

                            <a href="https://www.facebook.com/ameer.hamza.5203577" target='_blank'>
                                <FacebookOutlined style={{ fontSize: '40px', color: '#fee5b5', margin: '25px 10px' }} />
                            </a>

                            <a href="https://www.linkedin.com/in/ameer-hamza-a5327a18a/" target="_blank">
                                <LinkedinOutlined style={{ fontSize: '40px', color: '#fee5b5', margin: '25px 10px' }} />
                            </a>

                            <a href="https://www.behance.net/ameerhamza241ae562" target="_blank">
                                <BehanceSquareOutlined style={{ fontSize: '40px', color: '#fee5b5', margin: '25px 10px' }} />
                            </a>


                        </div>

                    </div>
                    <div data-aos="zoom-in"
                        data-aos-duration="2500"
                    >
                        <img src={userImage1} alt="image" />
                    </div>

                </div>
            </div> */}

        </>

    );
}

export default Introduction