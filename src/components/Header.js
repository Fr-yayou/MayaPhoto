import React from 'react';
import { Link } from 'react-router-dom';



function Header() {
    return (
        <div className='nav-container'>
            <ul className='nav-container__link'>
                <li className='nav-container__link__li'><Link className='nav-container__link__li__home' to ='/'>Portrait</Link></li>
                <li className='nav-container__link__li'><Link className='nav-container__link__li__home' to ='/lifestyle'>LifeStyle</Link></li>
                <li className='nav-container__link__li'><Link className='nav-container__link__li__home' to='/about'>About me</Link></li>
                <li className='nav-container__link__li'><Link className='nav-container__link__li__home' to='/contact'>Contact</Link></li>
            </ul>
        </div>
    )
}

export default Header;