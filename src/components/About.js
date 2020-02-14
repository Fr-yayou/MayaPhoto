import React from 'react'
import Maya from '../assets/Icon/Maya-one.jpg'

function About() {
    return (
        <div className='about-container'>
            <div className="pic-container">
                <img className="pic-container__pic"  src={Maya} alt='Maya'/>
            </div>
                <div className='text-container'>
                <p className='text'>Hi, my name is Maya and I’m a portrait, product, and lifestyle photographer helping individuals and companies come to life. </p>
                <p className='text'>I have experience shooting fashion, product and corporate headshots with the Four Seasons Hotel, Blue Ladder Projects and Gigimey Jewelry.</p>
                <p className='text'>Actors, realtors and musicians have hired me for their promotional headshots and social media platforms.Through my photos I tell the stories of the people I meet. </p>
                <p className='text'>Capturing their emotions and showing their individuality is important to me.</p>
                <p className='text'> I often find a reflection of them in myself as I continue to grow and evolve. I believe mindfulness in the workplace is the key to success.Ensure my clients are comfortable and have an uplifting experience.  People find me to be upbeat, self-motivated and a team player with excellent communication skills. Travelling is the blood in my veins.  </p>
                <p className='text'> New places, sights, smells and tastes inspire me, as does nature.I work as a freelance photographer and would love to create something special and memorable with you.</p>
            </div>
        </div>
    )
}

export default About;

 


