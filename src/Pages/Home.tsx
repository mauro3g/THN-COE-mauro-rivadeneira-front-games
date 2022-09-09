import React from 'react'
import HomeInfoSection from '../Atoms/HomeInfoSection/HomeInfoSection'
import HomePrevCatalog from '../Atoms/HomePrevCatalog/HomePrevCatalog'
import ImageSlider from '../Atoms/ImageSlider/ImageSlider'

const Home = () => {
    return (
        <React.Fragment>
            <ImageSlider />
            <HomeInfoSection />
            <HomePrevCatalog />
        </React.Fragment>
    )
}

export default Home