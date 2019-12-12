import React from 'react';
import Image1 from '../assets/lifeStyle-Compress/ImageOne.jpg'
import Image2 from '../assets/lifeStyle-Compress/DSC_0007.jpg';
import Image3 from '../assets/lifeStyle-Compress/DSC_0040.jpg';
import Image4 from '../assets/lifeStyle-Compress/DSC_0051.jpg';
import Image5 from '../assets/lifeStyle-Compress/DSC_0167-2.jpg';
import Image6 from '../assets/lifeStyle-Compress/DSC_0186.jpg';

function LifeStyle() {
    return (
        <div className='lifeStyle-container'>
            <div className='lifeStyle-container__grid'>
                <div className='lifeStyle-container__grid__galeryOne'>
                <img className='image' src={Image1} alt='picture-one'></img>
                </div>
                <figure className='lifeStyle-container__grid__galeryOne__galeryTwo'>
                   <img className='image' src={Image2} alt='picture-two'></img> 
                </figure>
                <figure className='lifeStyle-container__grid__galeryOne__galeryTwo__galeryThree'>
                    <img className='image' src={Image3} alt='picture-three'></img>
                </figure>
                <figure className='lifeStyle-container__grid__galeryOne__galeryTwo__galeryThree__galeryFour'>
                    <img className='image' src={Image4} alt='picture-three'></img>
                </figure>
                <figure className='lifeStyle-container__grid__galeryOne__galeryTwo__galeryThree__galeryFour__galeryFive'>
                    <img className='image' src={Image5} alt='picture-three'></img>
                </figure>
                <figure className='lifeStyle-container__grid__galeryOne__galeryTwo__galeryThree__galeryFour__galeryFive__galerySix'>
                    <img className='image' src={Image6} alt='picture-three'></img>
                </figure>
            </div>
        </div>
    )
}

export default LifeStyle;