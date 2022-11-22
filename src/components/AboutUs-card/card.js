import React from 'react';
import './card.css';
import Footer from '../Footer/footer';

import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LanguageIcon from '@mui/icons-material/Language';

//Import card image
import Img1 from './nafis.jpg';
import Img2 from './Mobin Mithun.JPG';
import Img3 from './shatil.jpg';
import Img4 from './imroz.jpg';
import Img5 from './efty.jpg';
import Img6 from './Mehedi Hasan.jpg';
import Img7 from './Ehasanul Hoque Shojib.jpg';
import Img8 from './Mukitur Rahman Mukit.jpg';
import Img9 from './Mahir Abrar.jpg';
import Img10 from './Mohaimeen Fardin.jpg';
import Img11 from './Toufiq Zia.jpg';
import Img12 from './Masrur Mortuza.jpg';
import Img13 from './Ayon Paul.jpg';



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
                <img src={Img2}alt="Mobin" />
                </div>
                <div className='A_content'>
                    <div className='A_details'>
                        <h2>Mobin Mithun<br /><span>Senior UX/UI Designer</span></h2>
                        <p><TelegramIcon sx={{ color: '#45f3ff'}}/> <span>Telegram</span></p>
                        <p><FacebookIcon sx={{ color: '#45f3ff'}}/> <span>Facebook</span></p>
                        <p><LanguageIcon sx={{ color: '#45f3ff'}}/> <span>Facebook</span></p>
                    </div>
                </div>
            </div>


            <div className='A_card'>
                <div className='A_lines' />
                <div className='A_imgBox'>
                    <img src={Img1} alt="Nafis" />
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
                    <div className='card_img A_card-1 fluid'>
                        <img src={Img3} alt="Shati" />
                    </div>
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
                    <div className='card_img A_card-1 fluid'>
                        <img src={Img4} alt ="Imroz" />
                    </div>
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
                    <div className='card_img A_card-1 fluid'>
                        <img src={Img5} alt="Efty" />
                    </div>
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


                        {/* Co-ordinator section */}

                {/* Batch 2k17 */}

        <div className='cardBg'>
            <div className='haderTxt'>
                BOT CO-ORDINATOR (2K17)
            </div>
            <section className='container'>

                <div className='A_co-ordinator'>
                    <div className='A_card'>
                        <div className='A_lines' />
                        <div className='A_co-ordinator-imgBox'>
                            <img src={Img7} alt="Mehedi" />
                        </div>
                        <div className='A_co-ordinator-name'>
                        Ehasanul Hoque Shojib
                        </div>
                        <div className='A_co-ordinator-icon'>
                            <p><TelegramIcon sx={{ color: '#45f3ff'}}/> </p>
                            <p><FacebookIcon sx={{ color: '#45f3ff'}}/> </p>
                            <p><LanguageIcon sx={{ color: '#45f3ff'}}/> </p>
                        </div>                           
                    </div>  
                </div>

                                <div className='A_co-ordinator'>
                    <div className='A_card'>
                        <div className='A_lines' />
                        <div className='A_co-ordinator-imgBox'>
                        
                            <img src={Img6} alt="Nafis" />
                        </div>
                        <div className='A_co-ordinator-name'>
                            MEHEDI HASAN
                        </div>
                        <div className='A_co-ordinator-icon'>
                            <p><TelegramIcon sx={{ color: '#45f3ff'}}/> </p>
                            <p><FacebookIcon sx={{ color: '#45f3ff'}}/> </p>
                            <p><LanguageIcon sx={{ color: '#45f3ff'}}/> </p>
                        </div>                           
                    </div>  
                </div>  

                <div className='A_co-ordinator'>
                    <div className='A_card'>
                        <div className='A_lines' />
                        <div className='A_co-ordinator-imgBox'>
                            <img src={Img8} alt="Nafis" />
                        </div>
                        <div className='A_co-ordinator-name'>
                            MUKITUR RAHMAN
                        </div>
                        <div className='A_co-ordinator-icon'>
                            <p><TelegramIcon sx={{ color: '#45f3ff'}}/> </p>
                            <p><FacebookIcon sx={{ color: '#45f3ff'}}/> </p>
                            <p><LanguageIcon sx={{ color: '#45f3ff'}}/> </p>
                        </div>                           
                    </div>  
                </div>
                <div className='A_co-ordinator'>
                    <div className='A_card'>
                        <div className='A_lines' />
                        <div className='A_co-ordinator-imgBox'>
                            <img src={Img13} alt="Nafis" />
                        </div>
                        <div className='A_co-ordinator-name'>
                            AYON PAUL
                        </div>
                        <div className='A_co-ordinator-icon'>
                            <p><TelegramIcon sx={{ color: '#45f3ff'}}/> </p>
                            <p><FacebookIcon sx={{ color: '#45f3ff'}}/> </p>
                            <p><LanguageIcon sx={{ color: '#45f3ff'}}/> </p>
                        </div>                           
                    </div>  
                </div>                                      

            </section>


        </div>  

                {/* Batch 2k18 */}

        <div className='cardBg'>
            <div className='haderTxt'>
                BOT CO-ORDINATOR (2K18)
            </div>
            <section className='container'>

                <div className='A_co-ordinator'>
                    <div className='A_card'>
                        <div className='A_lines' />
                        <div className='A_co-ordinator-imgBox'>
                            <img src={Img9} alt="Nafis" />
                        </div>
                        <div className='A_co-ordinator-name'>
                            MAHIE ABRAR
                        </div>
                        <div className='A_co-ordinator-icon'>
                            <p><TelegramIcon sx={{ color: '#45f3ff'}}/> </p>
                            <p><FacebookIcon sx={{ color: '#45f3ff'}}/> </p>
                            <p><LanguageIcon sx={{ color: '#45f3ff'}}/> </p>
                        </div>                           
                    </div>  
                </div>

                                <div className='A_co-ordinator'>
                    <div className='A_card'>
                        <div className='A_lines' />
                        <div className='A_co-ordinator-imgBox'>
                            <img src={Img10} alt="Nafis" />
                        </div>
                        <div className='A_co-ordinator-name'>
                            MOHAIMEEN FARDIN
                        </div>
                        <div className='A_co-ordinator-icon'>
                            <p><TelegramIcon sx={{ color: '#45f3ff'}}/> </p>
                            <p><FacebookIcon sx={{ color: '#45f3ff'}}/> </p>
                            <p><LanguageIcon sx={{ color: '#45f3ff'}}/> </p>
                        </div>                           
                    </div>  
                </div>  

                <div className='A_co-ordinator'>
                    <div className='A_card'>
                        <div className='A_lines' />
                        <div className='A_co-ordinator-imgBox'>
                            <img src={Img11} alt="Nafis" />
                        </div>
                        <div className='A_co-ordinator-name'>
                            TOUFIQ ZIA
                        </div>
                        <div className='A_co-ordinator-icon'>
                            <p><TelegramIcon sx={{ color: '#45f3ff'}}/> </p>
                            <p><FacebookIcon sx={{ color: '#45f3ff'}}/> </p>
                            <p><LanguageIcon sx={{ color: '#45f3ff'}}/> </p>
                        </div>                           
                    </div>  
                </div>
                <div className='A_co-ordinator'>
                    <div className='A_card'>
                        <div className='A_lines' />
                        <div className='A_co-ordinator-imgBox'>
                            <img src={Img12} alt="Nafis" />
                        </div>
                        <div className='A_co-ordinator-name'>
                            MASHRUR MORTUZA
                        </div>
                        <div className='A_co-ordinator-icon'>
                            <p><TelegramIcon sx={{ color: '#45f3ff'}}/> </p>
                            <p><FacebookIcon sx={{ color: '#45f3ff'}}/> </p>
                            <p><LanguageIcon sx={{ color: '#45f3ff'}}/> </p>
                        </div>                           
                    </div>  
                </div>                                      

            </section>

        </div>  

            {/* Line image */}
            
            <div className='line-Image-wrapper'>
                <div className='line' />
                <div className='line-icon-img' />
            </div>
            {/* Line image end */}

        <Footer />

    </div>

  )
}

export default About_card;