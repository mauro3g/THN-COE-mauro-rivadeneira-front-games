import React from 'react'

const HomeInfoSection = () => {
    return (
        <div className='info-section flex items-center'>
            <div >
                <img className='info-section__image' src='https://th.bing.com/th/id/R.cf7e2963735461d45a62c463261870b6?rik=Fl80bBAgsl4dpg&riu=http%3a%2f%2fassets.vg247.com%2fcurrent%2f2014%2f06%2fhalo_master_chief.jpg&ehk=8XtF1Xd2JAt5HDWVVBYy8oQ6nWJJXV3JIyWqchKPXqo%3d&risl=&pid=ImgRaw&r=0' />
            </div>
            <div className='info-section__polygon flex-grow'>
                <div className='info-section__polygon-title'>
                    PLAY HUNDREDS OF HIGH-QUALITY GAMES !
                </div>
                <div className='info-section__polygon-description'>
                    Enjoy incredible new games on day one like Halo Infinite from Xbox Game Studios, as well as iconic franchises from Bethesda Softworks, indie games, blockbusters, and more.
                </div>
            </div>
        </div>

    )
}

export default HomeInfoSection