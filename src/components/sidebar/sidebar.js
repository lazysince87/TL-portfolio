import React from 'react'
import './sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import Person4Icon from '@mui/icons-material/Person4';
import NextWeekIcon from '@mui/icons-material/NextWeek';
import EmailIcon from '@mui/icons-material/Email';

const Sidebar = () => {
  const[toggle, showMenu] = React.useState(false);



  return (
    <>
      <aside className='aside'>
        {/*Profile logo*/}
        <a href='#home' className='nav_logo'>
          <img src='' alt='' />
        </a>

        <nav className='nav'>
          <div className='nav_menu'>
            <ul className='nav_list'>

              <li className='nav_item'>
                <a href='#home' className='nav_link'>
                  <HomeIcon />
                </a>
              </li>

              <li className='nav_item'>
                <a href='#about' className='nav_link'>
                  <Person4Icon />
                </a>
              </li>

              <li className='nav_item'>
                <a href='#experience' className='nav_link'>
                  <NextWeekIcon />
                </a>
              </li>

              <li className='nav_item'>
                <a href='#contact' className='nav_link'>
                  <EmailIcon />
                </a>
              </li>

            </ul> 
          </div> 
        </nav>
        {/* <div className='nav_footer'>
            <span className='nav_footer_text'>© 2021</span>
        </div> */}
      </aside>
      {/* <div 
        className={toggle ? 'nav_toggle nav_toggle_open' : 'nav_toggle'}
        onClick={() => showMenu(!toggle)}>
        <i className="icon-menu"></i>
      </div> */}
    </>
  )
}

export default Sidebar