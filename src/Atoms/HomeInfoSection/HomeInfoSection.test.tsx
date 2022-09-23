import React from 'react';
import { render, screen } from '@testing-library/react';
import HomeInfoSection from './HomeInfoSection';

test('renders Game Card', () => {
    const { getByText, asFragment } = render(
        <HomeInfoSection/>
    );
    expect(getByText('PLAY HUNDREDS OF HIGH-QUALITY GAMES !')).toBeInTheDocument();
    expect(getByText('Enjoy incredible new games on day one like Halo Infinite from Xbox Game Studios, as well as iconic franchises from Bethesda Softworks, indie games, blockbusters, and more.')).toBeInTheDocument();
});