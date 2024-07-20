import React from 'react';
import Video from '../../assets/video/videoHero.mp4';
import './Hero.css';

function Hero() {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={Video} type='video/mp4' />
            </video>
            <div className="overlay"></div>
            <div className="content">
                <h1>IZNAJMI.ME</h1>
                <h2>Gde svaka vožnja postaje nezaboravno putovanje!</h2>
                <br></br>
            </div>
        </div>
    )
}

export default Hero
