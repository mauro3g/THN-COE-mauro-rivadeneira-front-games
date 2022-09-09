import React from 'react'
import GameCard from '../Atoms/GameCard/GameCard'
import { GAMES } from '../lib/constants/GamesData'
import Nav from '../Molecules/Nav/Nav'

const Games = () => {
    return (
        <React.Fragment>
            <div className='game-section'>
                <h1 className='game-section__title'>
                    Discover your next favorite games
                </h1>
                <div className='game-section__catalog'>
                    {GAMES.map((game) => {
                        return (
                            <GameCard
                                image={game.image}
                                title={game.title}
                                description={game.description}
                                imageStyles={{ width: '170px', height: '250px' }}
                            />
                        )
                    })}
                </div>
            </div>
        </React.Fragment>

    )
}

export default Games