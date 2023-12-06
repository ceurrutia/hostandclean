import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { personas } from './data/personas.js';
import PersonaView from './views/PersonaView.jsx';

const routes = [
  {
    path: "/",
    element: <App />
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
