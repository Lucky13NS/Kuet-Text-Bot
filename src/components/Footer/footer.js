import React from 'react';

import './footer.css';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';



const Footer= () => {
  return (
    <div className='footer'>
      <div className='footer_box'>

        <div className='footer_about'>
          <h3 className='footer_txt_hadder'>About us</h3>
          <p>About us</p>
          <p>Career</p>
          <p>Help</p>
        </div>

        <div className='footer_contact'>
          <h3 className='footer_txt_hadder'>Contact</h3>
          <div className='contact_align'>
            <p>Khulna University of Engineering and Technology(KUET)</p>
            <p>kuet.texbot@gmail.com</p>
          </div>

        </div>

        <div className='footer_socials'>
          <h3 className='footer_txt_hadder'>Socials</h3>
          <p><TelegramIcon sx={{ color: '#1CDB24'}}/> Telegram</p>
          <p><FacebookIcon sx={{ color: '#1CDB24'}}/> Telegram</p>
        </div>

        <div className='footer_our_app'>
          <h3 className='footer_txt_hadder'>Our App<span className='coming_soon'> (Coming soon)</span> </h3>
        </div>

        <div className='footer_subscribe'>
          <h3 className='footer_txt_hadder'>Join Us</h3>
          <input className='footer_input' type="email" placeholder="Upload your Resume Here." />
          <a href='/home' className='footer-button'>Upload</a>
        </div>

      </div>

      <div className='txt_right'>
        <h4>Join us and contribute your works to stay up to date</h4>
        <h4>Our academic files, events and all the things!!</h4>
      </div>

      <div className='green_line' />
        
        <div className='copyright'>
          Copyright@ 2022 KUET TEXTBOT | All Rights Reserved
          <div className='txt_right2'>
            <p>Privacy Policy</p>
            <p className='term_of_use'>Terms of Use</p>
          </div>
        </div>

    </div>


  )
}

export default Footer;