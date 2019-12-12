import React from 'react';
import Image1 from '../assets/lifeStyle-Compress/DSC_0186.jpg'
import Image2 from '../assets/lifeStyle-Compress/fullsizeoutput_2368.jpg';
import Image3 from '../assets/lifeStyle-Compress/DSC_0040.jpg';
import Image4 from '../assets/lifeStyle-Compress/ImageOne.jpg';
import Image5 from '../assets/lifeStyle-Compress/DSC_0051.jpg';
import Image6 from '../assets/lifeStyle-Compress/DSC_0007.jpg';
import Image7 from '../assets/lifeStyle-Compress/DSC_0318.jpg';
import Image8 from '../assets/lifeStyle-Compress/DSC_0218-2.jpg';
import Image9 from '../assets/lifeStyle-Compress/IMG_0056.jpg';
import Image10 from '../assets/lifeStyle-Compress/fullsizeoutput_1df1.jpg';

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
                <figure className='lifeStyle-container__grid__galeryOne__galeryTwo__galeryThree__galeryFour__galeryFive__galerySix__galerySeven'>
                    <img className='image' src={Image7} alt='picture-three'></img>
                </figure>
                <figure className='lifeStyle-container__grid__galeryOne__galeryTwo__galeryThree__galeryFour__galeryFive__galerySix__galerySeven__galeryEight'>
                    <img className='image' src={Image8} alt='picture-three'></img>
                </figure>
                <figure className='lifeStyle-container__grid__galeryOne__galeryTwo__galeryThree__galeryFour__galeryFive__galerySix__galerySeven__galeryEight__galeryNine'>
                    <img className='image' src={Image9} alt='picture-three'></img>
                </figure>
                <figure className='lifeStyle-container__grid__galeryOne__galeryTwo__galeryThree__galeryFour__galeryFive__galerySix__galerySeven__galeryEight__galeryNine__galeryTen'>
                    <img className='image' src={Image10} alt='picture-three'></img>
                </figure>
            </div>
        </div>
    )
}

export default LifeStyle;