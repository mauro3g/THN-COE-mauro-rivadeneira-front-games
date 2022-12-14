import React from 'react'
import useValues from '../hooks/value/useValues'
import { IGame } from '../types/Games';
import { postGames } from '../lib/utils/rest/gamesRepository';

const initialGameForm: IGame = {
    title: "",
    description: "",
    releaseDate: new Date(),
    developer: "",
    platform: "",
    genre: "",
    image: ""
}

const Management = () => {

    const { values: gameFormValues, updateValue: handleChange, updateValues } = useValues(initialGameForm)

    React.useEffect(() => {
        console.log(gameFormValues)
    }, [gameFormValues])

    const formatDate = (date: Date) => {
        return date.toLocaleDateString('en-GB').split('/').reverse().join('-');
    }

    const handleSubmit = async () => {
        const created = await postGames(gameFormValues)
        if (created) {
            updateValues(initialGameForm)
            alert("Juego creado")
        }
    }

    return (
        <React.Fragment>
            <div className='form flex justify-center items-center'>
                <div>
                    <form className='flex flex-col' onSubmit={(e) => { e.preventDefault(); handleSubmit() }}>
                        <h1>Crear Juego</h1>
                        <label htmlFor="title">Titulo:</label>
                        <input
                            id="title"
                            type="text"
                            aria-label='title'
                            value={gameFormValues['title']}
                            onChange={(e) => handleChange('title', e.target.value)}
                            autoFocus
                            required
                        />
                        <br />
                        <label htmlFor="description">Descripcion:</label>
                        <input
                            id="description"
                            type="text"
                            aria-label='description'
                            value={gameFormValues['description']}
                            onChange={(e) => handleChange('description', e.target.value)}
                            autoFocus
                            required
                        />
                        <br />
                        <label htmlFor="releaseDate">Fecha de lanzamiento:</label>
                        <input
                            id="releaseDate"
                            type="date"
                            aria-label='releaseDate'
                            value={formatDate(gameFormValues['releaseDate'])}
                            min="2000-01-01" max="2022-12-31"
                            onChange={(e) => handleChange('releaseDate', new Date(e.target.value + "Z"))}
                            autoFocus
                            required
                        />
                        <br />
                        <label htmlFor="developer">Desarrollador:</label>
                        <input
                            id="developer"
                            type="text"
                            aria-label='developer'
                            value={gameFormValues['developer']}
                            onChange={(e) => handleChange('developer', e.target.value)}
                            autoFocus
                            required
                        />
                        <br />
                        <label htmlFor="platform">Plataforma:</label>
                        <input
                            id="platform"
                            type="text"
                            aria-label='platform'
                            value={gameFormValues['platform']}
                            onChange={(e) => handleChange('platform', e.target.value)}
                            autoFocus
                            required
                        />
                        <br />
                        <label htmlFor="genre">Genero:</label>
                        <input
                            id="genre"
                            type="text"
                            aria-label='genre'
                            value={gameFormValues['genre']}
                            onChange={(e) => handleChange('genre', e.target.value)}
                            autoFocus
                            required
                        />
                        <br />
                        <label htmlFor="image">Imagen Url:</label>
                        <input
                            id="image"
                            type="text"
                            aria-label='image'
                            value={gameFormValues['image']}
                            onChange={(e) => handleChange('image', e.target.value)}
                            autoFocus
                            required
                        />
                        <br />
                        <button>Enviar</button>
                        <br />
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Management