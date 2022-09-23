import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Nav = () => {
    return (
        <React.Fragment>
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
            {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
            <Outlet />
        </React.Fragment>
    )
}

export default Nav