import React from 'react';
import { fireEvent, getByLabelText, prettyDOM, render, screen } from '@testing-library/react';
import Management from './Management';
import { postGames } from '../lib/utils/rest/gamesRepository';

jest.mock('../lib/utils/rest/gamesRepository', () => ({
    ...jest.requireActual('../lib/utils/rest/gamesRepository'),
    postGames: jest.fn(() => {
        return (
            {
                id: 1,
                title: "t1",
                description: "d1",
                releaseDate: new Date("2022-01-01"),
                developer: "dev1",
                platform: "p1",
                genre: "g1",
                image: "i1"
            }
        )
    })
}))

test('renders Management', () => {
    const { getByText, debug, container } = render(
        <Management />
    );
    expect(getByText('Crear Juego')).toBeInTheDocument();
});

test('Post is called', () => {
    const { getByText, getByLabelText, container } = render(
        <Management />
    );

    const sendButton = getByText('Enviar')
    expect(sendButton).toBeInTheDocument()

    fireEvent.change(getByLabelText('title'), {target: {value: 't1'}})
    fireEvent.change(getByLabelText('description'), {target: {value: 'd1'}})
    fireEvent.change(getByLabelText('releaseDate'), {target: {value: '2022-01-01'}})
    fireEvent.change(getByLabelText('developer'), {target: {value: 'dev1'}})
    fireEvent.change(getByLabelText('platform'), {target: {value: 'p1'}})
    fireEvent.change(getByLabelText('genre'), {target: {value: 'g1'}})
    fireEvent.change(getByLabelText('image'), {target: {value: 'i1'}})
    
    fireEvent(
        sendButton,
        new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }),
    )

    expect(postGames).toBeCalledWith(
        {
            title: "t1",
            description: "d1",
            releaseDate: new Date("2022-01-01"),
            developer: "dev1",
            platform: "p1",
            genre: "g1",
            image: "i1"
        }
    )
});