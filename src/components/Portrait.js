import React from 'react'
import ImageP1 from '../assets/Portrait-Compress/DSC_0039.jpg'
import ImageP2 from '../assets/Portrait-Compress/DSC_0047.jpg'
import ImageP3 from '../assets/Portrait-Compress/DSC_0054.jpg'
import ImageP4 from '../assets/Portrait-Compress/DSC_0122.jpg'
import ImageP5 from '../assets/Portrait-Compress/DSC_0141.jpg'
import ImageP6 from '../assets/Portrait-Compress/DSC_0173-2.jpg'
import ImageP7 from '../assets/Portrait-Compress/DSC_0213.jpg'
import ImageP8 from '../assets/Portrait-Compress/DSC_0154.jpg'
import ImageP9 from '../assets/Portrait-Compress/DSC_0156.jpg'
import ImageP10 from '../assets/Portrait-Compress/DSC_0231.jpg'
import ImageP11 from '../assets/Portrait-Compress/DSC_0382.jpg'
import ImageP12 from '../assets/Portrait-Compress/DSC_0684.jpg'
import ImageP13 from '../assets/Portrait-Compress/fullsizeoutput_1b7d.jpg'
import ImageP14 from '../assets/Portrait-Compress/fullsizeoutput_1ce8.jpg';

function Portrait() {
    return (
        <div className='portrait-container'>
            <div className='portrait-container__grid'>
                <div className='portrait-container__grid__galeryOneP'>
                    <img className='image' src={ImageP1} alt='P1'/>
                </div>
                <div className='portrait-container__grid__galeryOneP__galeryTwoP'>
                    <img className='image' src={ImageP2} alt='P2'/>
                </div>
                <div className='portrait-container__grid__galeryOneP__galeryTwoP__galeryThreeP'>
                    <img className='image' src={ImageP3} alt=' P3'/>
                </div>
                <div className='portrait-container__grid__galeryOneP__galeryTwoP__galeryThreeP__galeryFourP'>
                    <img className='image' src={ImageP4} alt=' P4'/>
                </div>
                <div className='portrait-container__grid__galeryOneP__galeryTwoP__galeryThreeP__galeryFourP__galeryFiveP'>
                    <img className='image' src={ImageP5} alt='P5'/>
                </div>
                <div className='portrait-container__grid__galeryOneP__galeryTwoP__galeryThreeP__galeryFourP__galeryFiveP__galerySixP'>
                    <img className='image' src={ImageP6} alt=' P6'/>
                </div>
                <div className='portrait-container__grid__galeryOneP__galeryTwoP__galeryThreeP__galeryFourP__galeryFiveP__galerySixP__galerySevenP'>
                    <img className='image' src={ImageP7} alt='P7'/>
                </div>
                <div className='portrait-container__grid__galeryOneP__galeryTwoP__galeryThreeP__galeryFourP__galeryFiveP__galerySixP__galerySevenP__galeryEightP'>
                    <img className='image' src={ImageP8} alt=' P8'/>
                </div>
                <div className='portrait-container__grid__galeryOneP__galeryTwoP__galeryThreeP__galeryFourP__galeryFiveP__galerySixP__galerySevenP__galeryEightP__galeryNineP'>
                    <img className='image' src={ImageP9} alt='P9'/>
                </div>
                <div className='portrait-container__grid__galeryOneP__galeryTwoP__galeryThreeP__galeryFourP__galeryFiveP__galerySixP__galerySevenP__galeryEightP__galeryNineP__galeryTenP'>
                    <img className='image' src={ImageP10} alt='P10'/>
                </div>
                <div className='portrait-container__grid__galeryOneP__galeryTwoP__galeryThreeP__galeryFourP__galeryFiveP__galerySixP__galerySevenP__galeryEightP__galeryNineP__galeryTenP__galeryElevenP'>
                    <img className='image' src={ImageP11} alt='P11'/>
                </div>
                <div className='portrait-container__grid__galeryOneP__galeryTwoP__galeryThreeP__galeryFourP__galeryFiveP__galerySixP__galerySevenP__galeryEightP__galeryNineP__galeryTenP__galeryElevenP__galeryTwelve'>
                    <img className='image' src={ImageP12} alt=' P12'/>
                </div>
                <div className='portrait-container__grid__galeryOneP__galeryTwoP__galeryThreeP__galeryFourP__galeryFiveP__galerySixP__galerySevenP__galeryEightP__galeryNineP__galeryTenP__galeryElevenP__galeryTwelve__galeryTheirteen'>
                    <img className='image' src={ImageP13} alt='P13'/>
                </div>
                <div className='portrait-container__grid__galeryOneP__galeryTwoP__galeryThreeP__galeryFourP__galeryFiveP__galerySixP__galerySevenP__galeryEightP__galeryNineP__galeryTenP__galeryElevenP__galeryTwelve__galeryTheirteen__galeryFourteen'>
                    <img className='image' src={ImageP14} alt='P14'/>
                </div>
            </div>
        </div>
    )
}

export default Portrait;