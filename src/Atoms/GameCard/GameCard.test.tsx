import React from 'react';
import { prettyDOM, render, screen } from '@testing-library/react';
import GameCard from './GameCard';

test('renders Game Card', () => {
    const { getByText, debug, container } = render(
        <GameCard image='http://image1' title='shooter' description='shooter game' />
    );
    expect(getByText('shooter')).toBeInTheDocument();
    expect(getByText('shooter game')).toBeInTheDocument();

    debug();

    const imgSel: any = container.querySelector('img')

    console.log(prettyDOM(imgSel))

});

test('verify styles', () => {
    const { getByText, debug, container } = render(
        <GameCard image='http://image1' title='shooter' description='shooter game' />
    );

    const el = getByText('shooter')

    console.log(prettyDOM(el))

    expect(el).toHaveClass('game-card__text-title')
})