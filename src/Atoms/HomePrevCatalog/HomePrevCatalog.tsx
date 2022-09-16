import React from 'react'
import { GAMES } from '../../lib/constants/GamesData'
import GameCard from '../GameCard/GameCard'
import { getGames } from '../../lib/utils/rest/gamesRepository';
import { IGame } from '../../types/Games';

const HomePrevCatalog = () => {

    const [games, setGames] = React.useState<IGame[]>([])

    React.useEffect(() => {
        initialValues()
    }, [])

    const initialValues = async () => {
        const catalog: IGame[] = await getGames()
        setGames(catalog)
    }

    return (
        <div className='game-prev-section'>
            <h1 className='game-prev-section__title'>
                Discover your next favorite games
            </h1>
            <div className='game-prev-section__catalog'>
                {games.map((game, index) => {
                    return (
                        <>
                            {index < 6 && <GameCard
                                image={game.image}
                                title={game.title}
                                description={game.genre}
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