import React from 'react'
import './about.css'
import aboutBox from './aboutBox'

const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className='section_title'>about me</h2>
      <div className='about_container grid'>
        <img src='avatar.jpeg' alt="" className='about_img'/>
       
        <div className='about_data grid'>
          <div className='about_info'>
            <p className='about_description'>I am a CS student at the University of Florida with a passion for learning 
            and building. I'm currently focused on fullstack development, with an emphasis on frontend technologies. I am currently
            interning at CACI International in the space division, while building a personal project with some friends.
            </p>
          </div>

          <div className='about_skill grid'>

            <div className='skill_data'>
              <div className='skill_titles'>
                <h3 className='skill_name'>JAVA/C++</h3>
                <span className='skill_number'>90%</span>
              </div>
              <div className='skill_bar'>
                <span className='skill_percentage pg_language'></span>
              </div>
            </div>

            <div className='skill_data'>
              <div className='skill_titles'>
                <h3 className='skill_name'>REACT.JS</h3>
                <span className='skill_number'>85%</span>
              </div>
              <div className='skill_bar'>
                <span className='skill_percentage react'></span>
              </div>
            </div>

            <div className='skill_data'>
              <div className='skill_titles'>
                <h3 className='skill_name'>DATABASE</h3>
                <span className='skill_number'>87%</span>
              </div>
              <div className='skill_bar'>
                <span className='skill_percentage databse'></span>
              </div>
            </div>

            <div className='skill_data'>
              <div className='skill_titles'>
                <h3 className='skill_name'>FULLSTACK DEVELOPMENT</h3>
                <span className='skill_number'>87%</span>
              </div>
              <div className='skill_bar'>
                <span className='skill_percentage backend_dev'></span>
              </div>
            </div>

          </div>

        </div>
        
      </div>

      <aboutBox />
    </section>
  )
}

export default About