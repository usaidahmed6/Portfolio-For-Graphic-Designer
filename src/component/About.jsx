import React from 'react';
import '../style/About.css';
import userImage from '../images/hamza2.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../style/Services.css';
import { FlagOutlined, ShoppingOutlined } from '@ant-design/icons';



AOS.init();

const About = ({ children }) => {
  return (
    <div className='text-light About' id='About'>
      <div className="aboutContainer ">
        <div data-aos="fade-up"
          data-aos-duration="2500" className='imageCont'>
          <img src={userImage} alt="image" className='userImage2' />
        </div>
        <div className='aboutContant'>
          <h2 className='my-4 aboutMe-text'>About Me</h2>

          <p className='my-6'>As a Creative Graphic Designer, I am passionate about creating visually stunning designs that effectively communicate a message and leave a lasting impact. With a keen eye for detail and a knack for understanding the target audience, I bring a unique perspective to each project that I work on.</p>

          <p className='my-6'>My skills in graphic design include proficiency in Adobe Creative Suite, creating logos, branding materials, packaging designs, print and digital advertising, and social media graphics. I have experience collaborating with clients to understand their vision and develop designs that exceed their expectations.</p>


          <div className='btn-resume-container'>
            <a href="https://firebasestorage.googleapis.com/v0/b/hackthon-of-react-js.appspot.com/o/CV%20copy.pdf?alt=media&token=26a41c4b-a76e-4c0f-af08-a1754229908d" className='btn-resume hvr-bounce-to-right' target='_blank'>View Resume</a>
          </div>

        </div>
      </div>


      <div className='ServicesContainer'>
        <h2 className='Heading' id='MyServices'>My Services</h2>
        <div className='service'>

          <div className="myServicesCards" data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <div>
              {/* <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-paragraph serviceIcon" viewBox="0 0 16 16">
                <path d="M10.5 15a.5.5 0 0 1-.5-.5V2H9v12.5a.5.5 0 0 1-1 0V9H7a4 4 0 1 1 0-8h5.5a.5.5 0 0 1 0 1H11v12.5a.5.5 0 0 1-.5.5z" />
              </svg> */}
              <FlagOutlined className='serviceIcon' />
            </div>

            <span className='text-heading'>Graphic Design</span>
            <p className='color-light-grey'>My skills in graphic design include proficiency in Adobe Creative Suite, creating logos, branding materials, packaging designs, print and digital advertising, and social media graphics.</p>
          </div>
          <div className="myServicesCards" data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-wordpress serviceIcon" viewBox="0 0 16 16">
                <path d="M12.633 7.653c0-.848-.305-1.435-.566-1.892l-.08-.13c-.317-.51-.594-.958-.594-1.48 0-.63.478-1.218 1.152-1.218.02 0 .039.002.058.003l.031.003A6.838 6.838 0 0 0 8 1.137 6.855 6.855 0 0 0 2.266 4.23c.16.005.313.009.442.009.717 0 1.828-.087 1.828-.087.37-.022.414.521.044.565 0 0-.371.044-.785.065l2.5 7.434 1.5-4.506-1.07-2.929c-.369-.022-.719-.065-.719-.065-.37-.022-.326-.588.043-.566 0 0 1.134.087 1.808.087.718 0 1.83-.087 1.83-.087.37-.022.413.522.043.566 0 0-.372.043-.785.065l2.48 7.377.684-2.287.054-.173c.27-.86.469-1.495.469-2.046zM1.137 8a6.864 6.864 0 0 0 3.868 6.176L1.73 5.206A6.837 6.837 0 0 0 1.137 8z" />
                <path d="M6.061 14.583 8.121 8.6l2.109 5.78c.014.033.03.064.049.094a6.854 6.854 0 0 1-4.218.109zm7.96-9.876c.03.219.047.453.047.706 0 .696-.13 1.479-.522 2.458l-2.096 6.06a6.86 6.86 0 0 0 2.572-9.224z" />
                <path fill-rule="evenodd" d="M0 8c0-4.411 3.589-8 8-8 4.41 0 8 3.589 8 8s-3.59 8-8 8c-4.411 0-8-3.589-8-8zm.367 0c0 4.209 3.424 7.633 7.633 7.633 4.208 0 7.632-3.424 7.632-7.633C15.632 3.79 12.208.367 8 .367 3.79.367.367 3.79.367 8z" />
              </svg>

            </div>

            <span className='text-heading'>Website Develop & Design</span>
            <p className='color-light-grey'>My skills in website development include proficiency in HTML, CSS, JavaScript, and WordPress, as well as experience in front-end and back-end development, responsive design, and search engine optimization (SEO).</p>
          </div>
          <div className="myServicesCards" data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <div>
              <ShoppingOutlined className='serviceIcon' />
            </div>

            <span className='text-heading'>Shopify Store Creation</span>
            <p className='color-light-grey'>My skills in Shopify store creation include proficiency in creating custom themes, developing plugins and apps, integrating third-party tools, and optimizing the store for search engines.</p>
          </div>


        </div>

      </div>
      {children}
    </div>
  )
}

export default About
