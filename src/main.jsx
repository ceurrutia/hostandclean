import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { personas } from './data/personas.js';
import PersonaView from './views/PersonaView.jsx';
import Navbar from './components/Navbar.jsx';

const routes = [
  {
    path: "/",
    element: <App />
  },
  {
    path: "/about",
    element: <Navbar />
  },
  {
    path: "/contact",
    element: <Navbar />
  },
  {
    path: "/how",
    element: <Navbar />
  },

  {
    path: "/cleaners",
    element: <Navbar />
  },
  {
    path: "/hosts",
    element: <Navbar />
  },

];

personas.forEach((persona) =>{
  routes.push({
    path: persona.name,
    element: <PersonaView persona={persona} />, 
  });

});



const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router} />
  </React.StrictMode>,
)
