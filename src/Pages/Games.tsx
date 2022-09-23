import React from 'react'
import GameCard from '../Atoms/GameCard/GameCard'
import { GAMES } from '../lib/constants/GamesData'
import { getGames } from '../lib/utils/rest/gamesRepository'
import { IGame } from '../types/Games'

const Games = () => {

    const [games, setGames] = React.useState<IGame[]>([])

    React.useEffect(() => {
        initialValues()
    }, [])

    const initialValues = async () => {
        const catalog: IGame[] = await getGames()
        setGames(catalog)
    }
    return (
        <React.Fragment>
            <div className='game-section'>
                <h1 className='game-section__title'>
                    Discover your next favorite games
                </h1>
                <div className='game-section__catalog'>
                    {games.map((game) => {
                        return (
                            <GameCard
                                image={game.image}
                                title={game.title}
                                description={""}
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