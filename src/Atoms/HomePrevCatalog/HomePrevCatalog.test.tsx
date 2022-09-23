import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePrevCatalog from './HomePrevCatalog';

test('renders Home Catalog', () => {
    const { getByText, asFragment } = render(
        <HomePrevCatalog/>
    );
    expect(getByText('Discover your next favorite games')).toBeInTheDocument();
});