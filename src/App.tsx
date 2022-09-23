import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link, createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Games from './Pages/Games';
import Nav from './Molecules/Nav/Nav';
import Footer from './Atoms/Footer/Footer';
import Management from './Pages/Management';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "games",
        element: <Games />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "manage",
        element: <Management />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="games" element={<Games />} />
        <Route path="about" element={<About />} />
      </Routes> */}
    </div>
  );
}

export default App;
