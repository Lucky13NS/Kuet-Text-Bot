import React from 'react';
import './card.css';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LanguageIcon from '@mui/icons-material/Language';

const About_card= () => {
  return (
    <div className='card-background'>
        <div className='cardBg'>
            <div className='haderTxt'>
                SITE MANAGEMENT
            </div>
            <section className='container'>

            <div className='A_card'>
                <div className='A_lines' />
                <div className='A_imgBox'>
                    {/* <img src="/src/images/AboutUs_img/nafis.jpg" alt='card_img'></img> */}
                    <div className='card_img A_card-1 fluid'></div>
                </div>
                <div className='A_content'>
                    <div className='A_details'>
                        <h2>Mobin Mithun<br /><span>Senion UX/UI Designer</span></h2>
                        <p><TelegramIcon sx={{ color: '#45f3ff'}}/> <span>Telegram</span></p>
                        <p><FacebookIcon sx={{ color: '#45f3ff'}}/> <span>Facebook</span></p>
                        <p><LanguageIcon sx={{ color: '#45f3ff'}}/> <span>Facebook</span></p>
                    </div>
                </div>
            </div>


            <div className='A_card'>
                <div className='A_lines' />
                <div className='A_imgBox'>
                    {/* <img src="/src/images/AboutUs_img/nafis.jpg" alt='card_img'></img> */}
                    <div className='card_img A_card-1 fluid'></div>
                </div>
                <div className='A_content'>
                    <div className='A_details'>
                        <h2>Musfiqur Rahman Nafis<br /><span>Junior Front-end/Back-end Developer</span></h2>
                        <p><TelegramIcon sx={{ color: '#45f3ff'}}/> <span>Telegram</span></p>
                        <p><FacebookIcon sx={{ color: '#45f3ff'}}/> <span>Facebook</span></p>
                        <p><LanguageIcon sx={{ color: '#45f3ff'}}/> <span>Facebook</span></p>
                    </div>
                </div>
            </div>


            <div className='A_card'>
                <div className='A_lines' />
                <div className='A_imgBox'>
                    {/* <img src="/src/images/AboutUs_img/nafis.jpg" alt='card_img'></img> */}
                    <div className='card_img A_card-1 fluid'></div>
                </div>
                <div className='A_content'>
                    <div className='A_details'>
                        <h2>Shahriar Shatil<br /><span>Junior Front-end/Back-end Developer</span></h2>
                        <p><TelegramIcon sx={{ color: '#45f3ff'}}/> <span>Telegram</span></p>
                        <p><FacebookIcon sx={{ color: '#45f3ff'}}/> <span>Facebook</span></p>
                        <p><LanguageIcon sx={{ color: '#45f3ff'}}/> <span>Facebook</span></p>
                    </div>
                </div>
            </div>


            <div className='A_card'>
                <div className='A_lines' />
                <div className='A_imgBox'>
                    {/* <img src="/src/images/AboutUs_img/nafis.jpg" alt='card_img'></img> */}
                    <div className='card_img A_card-1 fluid'></div>
                </div>
                <div className='A_content'>
                    <div className='A_details'>
                        <h2>Md. Towfiq Imroz<br /><span>Junior Front-end/Back-end Developer</span></h2>
                        <p><TelegramIcon sx={{ color: '#45f3ff'}}/> <span>Telegram</span></p>
                        <p><FacebookIcon sx={{ color: '#45f3ff'}}/> <span>Facebook</span></p>
                        <p><LanguageIcon sx={{ color: '#45f3ff'}}/> <span>Facebook</span></p>
                    </div>
                </div>
            </div>


            
            <div className='A_card'>
                <div className='A_lines' />
                <div className='A_imgBox'>
                    {/* <img src="/src/images/AboutUs_img/nafis.jpg" alt='card_img'></img> */}
                    <div className='card_img A_card-1 fluid'></div>
                </div>
                <div className='A_content'>
                    <div className='A_details'>
                        <h2>Efty Mahmud<br /><span>Junior Front-end/Back-end Developer</span></h2>
                        <p><TelegramIcon sx={{ color: '#45f3ff'}}/> <span>Telegram</span></p>
                        <p><FacebookIcon sx={{ color: '#45f3ff'}}/> <span>Facebook</span></p>
                        <p><LanguageIcon sx={{ color: '#45f3ff'}}/> <span>Facebook</span></p>
                    </div>
                </div>
            </div>

            </section>


                     
        </div>
    </div>

  )
}

export default About_card;