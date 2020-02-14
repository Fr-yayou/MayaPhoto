import React from 'react';
import { Link } from 'react-router-dom';
import Icon2 from '../assets/Icon/instagram-3.png';
import Icon3 from '../assets/Icon/linkedin-3.png';
import Logo from '../assets/Icon/MAYAversion2.jpg';



function Header() {
    return (
        <div className='nav-container'>
            <Link className='nav-container__link__li__home' to ='/'><img  id='logo'src={Logo} alt='Maya'/></Link>
            <ul className='nav-container__link'>
                <li className='nav-container__link__li'><Link className='nav-container__link__li__home' to ='/'>Portrait</Link></li>
                <li className='nav-container__link__li'><Link className='nav-container__link__li__home' to ='/lifestyle'>LifeStyle</Link></li>
                <li className='nav-container__link__li'><Link className='nav-container__link__li__home' to='/about'>About me</Link></li>
                <li className='nav-container__link__li'><Link className='nav-container__link__li__home' to='/contact'>Contact</Link></li>
            </ul>
            <div className='nav-container__link__li__home__icon'>
                <a href='https://www.instagram.com/mayahuntermcmartin/'><img id='instagram' src={Icon2} alt='instagram'/></a>
                <a href ='https://www.linkedin.com/in/mayahuntermcmartin/'><img id='linkdin' src={Icon3} alt='linkdin'/></a>
            </div>
        </div>
    )
}

export default Header;