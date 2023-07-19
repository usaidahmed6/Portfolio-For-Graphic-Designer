import React from 'react'
import Works from './Works';
import '../style/SkillsAndTools.css'
import { StarOutlined } from '@ant-design/icons';

const SkillsAndTools = ({ children }) => {
  return (
    <Works>
      <div className='skill-Container' id='Skills-Tools'>
        <h2 className='Heading'>Skills & Tools</h2>
        <div className='skill-main'>
          <div className='skill-box' data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <StarOutlined style={{ fontSize: '30px', color: '#fee5b5' }} />
            <h4 className='my-4'>Brand Design</h4>
          </div>

          <div className='skill-box' data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <StarOutlined style={{ fontSize: '30px', color: '#fee5b5' }} />
            <h4 className='my-4'>Logo Design</h4>
          </div>

          <div className='skill-box' data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <StarOutlined style={{ fontSize: '30px', color: '#fee5b5' }} />
            <h4 className='my-4'>360 photo Design</h4>
          </div>

          <div className='skill-box' data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <StarOutlined style={{ fontSize: '30px', color: '#fee5b5' }} />
            <h4 className='my-4'>Product Design</h4>
          </div>

          <div className='skill-box' data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <StarOutlined style={{ fontSize: '30px', color: '#fee5b5' }} />
            <h4 className='my-4'>Photoshop</h4>
          </div>

          <div className='skill-box' data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <StarOutlined style={{ fontSize: '30px', color: '#fee5b5' }} />
            <h4 className='my-4'>3d exhibition Design</h4>
          </div>

          <div className='skill-box' data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <StarOutlined style={{ fontSize: '30px', color: '#fee5b5' }} />
            <h4 className='my-4'>Banner Design</h4>
          </div>

          <div className='skill-box' data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <StarOutlined style={{ fontSize: '30px', color: '#fee5b5' }} />
            <h4 className='my-4'>Cinema 4d</h4>
          </div>

        </div>
      </div>
      {children}
    </Works>
  )
}

export default SkillsAndTools
