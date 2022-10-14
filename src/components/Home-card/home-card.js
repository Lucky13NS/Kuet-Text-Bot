import React from 'react';
import './home-card.css';




const home_card= () => {
  return (
<div>

    <div className='cardBg'>
    <div className='haderTxt'>
        ACADEMIC FILES
    </div>
        <section class='container'>

        <a href='/home'>
        <div class="card">

                <div class="card-image card-1">
                    <div class="card-text">
                        SLIDES & BOOKS
                    </div >
                </div>
            </div>

        </a>

        <a href='/home'>
        <div class="card">
                <div class="card-image card-2">
                    <div class="card-text">
                        NOTES
                    </div>
                </div>    
            </div>
        </a>

        <a href='/home'>
        <div class="card">
                <div class="card-image card-3">
                    <div class="card-text">
                        RECENT DRIVES
                    </div>
                </div>
            </div>
        </a>

        <a href='/home'>
        <div class="card">
                <div class="card-image card-4">
                    <div class="card-text">
                        OTHER DOCS
                    </div>
                </div>
            </div>
        </a>

        </section>                     
</div>

            {/* CARD NUMBER TWO */}

<div className='cardBg'>
    <div className='haderTxt'>
        EXPLORE
    </div>
        <section class='container'>

        <a href='/home'>
            <div class="card">
                <div class="card-image card-5">
                
                    <div class="card-text">
                        PROFILES
                    </div >
                </div>
            </div>
         </a>   

        <a href='/home'>
            <div class="card">
                <div class="card-image card-6">
                    <div class="card-text">
                        LIBRARY
                    </div>
                </div>    
            </div>
        </a>

        <a href='/home'>
            <div class="card">
                <div class="card-image card-7">
                    <div class="card-text">
                        HIGHER STUDY
                    </div>
                </div>
            </div>
        </a>

        <a href='/home'>
            <div class="card">
                <div class="card-image card-8">
                    <div class="card-text">
                        CLUBS & GROUPS
                    </div>
                </div>
            </div>
        </a>    
        </section>                     
    </div>
</div>

  )
}

export default home_card;