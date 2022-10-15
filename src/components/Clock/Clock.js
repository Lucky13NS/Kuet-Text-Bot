import React from 'react';
import './Clock.css';

setInterval(() =>{
    let hh = document.getElementById('hh');
    let mm = document.getElementById('mm');
    let ss = document.getElementById('ss');

    let sec_dot = document.querySelector('.sec_dot');
    let min_dot = document.querySelector('.min_dot');
    let hr_dot = document.querySelector('.hr_dot');

    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let am = h >= 12 ? "PM" : 'AM';

    // Convert 24hr clock to 12hr clock

    hours.innerHTML = h >= 12 ? h-12 : h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;

    hh.style.strokeDashoffset = 510 - ( 510 * h ) / 24;

    mm.style.strokeDashoffset = 630 - (630 * m ) / 60;

    ss.style.strokeDashoffset = 760 - ( 760 * s ) / 60;

    sec_dot.style.transform = `rotateZ(${s * 6}deg)`;

    min_dot.style.transform = `rotateZ(${m * 6}deg)`;

    hr_dot.style.transform = `rotateZ(${h * 30}deg)`;
})


const clock= () => {
  return (


    <div className='watch'>

    <div id="time">
        <div className='circle' style={{ "--clr":"#ff2972" }}>
            <div className='dots sec_dot'></div>
            <svg>
                <circle cx="120" cy="120" r="120" id="ss" ></circle>
            </svg>
        </div>

        <div className='circle' style={{ "--clr":"#fee800" }}>
            <div className='dots min_dot'></div>
            <svg>
                <circle cx="100" cy="100" r="100" id="mm" className='c2'></circle>
            </svg>
        </div>

        <div className='circle' style={{ "--clr":"#04fc43" }}>
            <div className='dots hr_dot'></div>
            <svg>
                <circle cx="80" cy="80" r="80" id="hh" className='c3'></circle>
            </svg>
        </div>

    </div>

    <div className='timeBx'>
        <div id='hours' style={{"--c":"#04fc43"}}>00</div>
        <div id='minutes' style={{"--c":"#fee800"}}>00</div>
        <div id='seconds' style={{"--c":"#ff2972"}}>00</div>
        <div className='ap' style={{"--c":"#fff"}}><div id='ampm'>AM</div></div>
    </div>

</div>

  )
}

export default clock;