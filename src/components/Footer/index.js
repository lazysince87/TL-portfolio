import React from 'react'

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">
        <div className="socialMedia">
            <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/thuy-n-le/')}/>
            <GitHubIcon onClick={() => window.open('https://github.com/lazysince87')}/>
            <EmailIcon onClick={() => window.location = 'mailto:lecrystal1808@gmail.com'}/>
    
        </div>
        <p> &copy; Thuy Le</p>
    </div>
  )
}

export default Footer