import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <div className='flex navbar'>
                <div className='flex flex-grow items-center'>
                    <div className='navbar__decorator flex items-center'>
                        <Link to={"/"}>3D GAMES</Link>
                    </div>
                </div>
                <div className='navbar__link'>
                    <Link to="/games" >
                        <div className='navbar__button '>
                            Games
                        </div>
                    </Link>
                </div>
                <div className='navbar__link'>
                    <Link to="/events" >
                        <div className='navbar__button '>
                            E-Sports
                        </div>
                    </Link>
                </div>
                <div className='navbar__link'>
                    <Link to="/about" >
                        <div className='navbar__button '>
                            About
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav