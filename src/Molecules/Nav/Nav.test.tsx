import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { BrowserRouter, MemoryRouter, useLocation, createMemoryRouter, RouterProvider } from 'react-router-dom'
import Nav from './Nav';
import Home from '../../Pages/Home';
import Games from '../../Pages/Games';
import About from '../../Pages/About';

describe('Navigation', () => {
    test('renders Nav Home Location', async () => {
        const FAKE_EVENT = { name: "test event" };
        const routes = [
            {
                path: "/",
                element: <Home />,
                children: [
                    {
                        path: "dashboard",
                        element: <Games />,
                    },
                    {
                        path: "about",
                        element: <About />,
                    }
                ]
            }
        ];
        const router = createMemoryRouter(routes, {
            initialEntries: ["/", "/games"],
            initialIndex: 1,
        });

        render(<RouterProvider router={router} />);

        // await waitFor(() => screen.getByRole("nav"));
        // expect(screen.getByRole("nav")).toHaveTextContent(
        //     FAKE_EVENT.name
        // );
    });
}) 