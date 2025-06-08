import React from 'react'
import './home.css'
import Scrolldown from './scrolldown';
import Shapes from './shapes'; 
import Typed from 'typed.js';
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'


const Home = () => {
  React.useEffect(() => {
    const typed = new Typed('.multiText', {
        strings: ['UF Student', 'Coder', 'Content Creator', 'Designer'],
        typeSpeed: 100,
        backSpeed: 80,
        loop: true,
        backDelay: 1000
    });
    return () => {
        typed.destroy();
    }
  }, [])

  return (
    <section className="home" id="home">
      
      <img src='logocat.png' alt='' className='intro__img content-div'/>

      <div className='intro content-div'>
        <h1 className='home__name'>hello world, from thuy</h1>
        <p>I'm a <span className="multiText" ></span></p>
      </div>

      <div className='home__social content-div'>
      <GitHubIcon className="social_link" onClick={() => window.open('https://github.com/lazysince87')}/>

        <LinkedInIcon className="social_link" onClick={() => window.open('https://www.linkedin.com/in/thuy-n-le/')}/>

        <EmailIcon className="social_link" onClick={() => window.location = 'mailto:lecrystal1808@gmail.com'}/>

      </div>
      <a href='#contact' className='btn content-div'>Connect With Me</a>
      <Scrolldown />
      <Shapes />
    </section>
  )
}

export default Home