import React from 'react'
import { GAMES } from '../../lib/constants/GamesData'
import GameCard from '../GameCard/GameCard'

const HomePrevCatalog = () => {
    return (
        <div className='game-prev-section'>
            <h1 className='game-prev-section__title'>
                Discover your next favorite games
            </h1>
            <div className='game-prev-section__catalog'>
                {GAMES.map((game, index) => {
                    return (
                        <>
                            {index < 6 && <GameCard
                                image={game.image}
                                title={game.title}
                                description={game.description}
                                imageStyles={{ width: '170px', height: '250px' }}
                            />
                            }
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default HomePrevCatalog