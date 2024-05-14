import React from 'react';
import '~/styles/App.css';
import { Link } from 'react-router-dom';

export function Nav() {
    return (
        <div className="navbar-container">
            <Link className='navbar-link' to='/'><img src={"../MovieMagic.png"} alt="Magical Movie Enclosure" className='image'/></Link>
            <Link className='navbar-link' to='/movies'>Movies</Link>
            <Link className='navbar-link' to='/music'>Music</Link>
            <Link className='navbar-link' to='/'><img src={"../MovieMagic.png"} alt="Magical Movie Enclosure" className='image'/></Link>
        </div>
    );
}