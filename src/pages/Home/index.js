import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'
import Shapes from './Shapes'
import './Home.css'
import Typed from 'typed.js';

const Home = () => {

  React.useEffect(() => {
    const typed = new Typed('.multiText', {
        strings: ['UF Student', 'Coder', 'Content Creator', 'Editor'],
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
    <div className="home">
      <div className="about">
      <Shapes />
        <img src="caticon.png" alt="Avatar"></img>
        <h2>Hi, I'm Crystal!</h2>
        <div className="prompt">
           <h3>I'm a <span className="multiText" ></span></h3> 

          {/* TODO: Update URLs */}
          <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/thuy-n-le/')}/>
          <GitHubIcon onClick={() => window.open('https://github.com/lazysince87')}/>
          <EmailIcon onClick={() => window.location = 'mailto:lecrystal1808@gmail.com'}/>
        </div>

      </div>
      <div className="skills">
        <h2 className="skills-title">Skills</h2>
        <ol className="list">
          <li className="item">
            <h2>Languages</h2>
            Javascript  |  C++  |  Typescript
          </li>
          <li className="item">
            <h2>Frameworks</h2>
            React | NextJS | ExpressJS
          </li>
          <li className="item">
            {/*
            <h2>Coursework</h2>
            * TODO: Add coursework here */}
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home