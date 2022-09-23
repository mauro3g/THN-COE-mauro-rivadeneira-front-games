import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders Footer', () => {
    const { getByText, asFragment } = render(<Footer />);
    expect(getByText('@2022, EC - 3DGAMES. All Rights Reserved.')).toBeInTheDocument();
});
