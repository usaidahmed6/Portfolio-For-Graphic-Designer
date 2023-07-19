import React from 'react';
import '../style/Footer.css'
import { BehanceSquareOutlined, LinkedinOutlined, DribbbleOutlined, FacebookOutlined } from '@ant-design/icons';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-main'>
                <div className='get-in-touch'>
                    <h2> Get in Touch </h2>
                    <p>Thank you for taking the time to review my portfolio. If you're interested in working together, I'd love to hear from you! Please feel free to use the contact information below to get in touch with me.</p>
                    {/* <InstagramOutlined style={{ fontSize: '40px', color: '#fee5b5', margin: '5px' }} />
                    <LinkedinOutlined style={{ fontSize: '40px', color: '#fee5b5', margin: '5px' }} />
                    <BehanceSquareOutlined style={{ fontSize: '40px', color: '#fee5b5', margin: '5px' }} /> */}
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
                <div className='box' data-aos="flip-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <DribbbleOutlined style={{ fontSize: '40px', margin: '20px 0px' }} />
                    <div>

                        <a href="https://www.fiverr.com/ameerhamza2090" className='link-web' target='_blank' >
                            https://www.fiverr.com/ameerhamza2090
                        </a>
                    </div>
                </div>

                <div className='box' data-aos="flip-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16" style={{ margin: '20px 0px' }}>
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                    </svg>
                    <div>

                        <b className='link-web'>
                            ameer.hamza2090@gmail.com
                        </b>
                    </div>
                </div>



            </div>

        </div>
    )
}

export default Footer
