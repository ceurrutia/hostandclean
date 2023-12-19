import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Navbar from './components/Navbar.jsx';
import About from './components/About.jsx';
import ContactForm from './components/ContactForm.jsx';
import PersonaView from './views/PersonaView.jsx';
import { personas } from './data/personas.js';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Cleaners from './components/Cleaners.jsx';
import Hosts from './components/Hosts.jsx';
import Accordion from './components/Accordion.jsx';



const RoutesContainer = () => {
  return (
    <>
      <Navbar /> {/* Colocar la Navbar fuera de las rutas */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cleaners" element={<Cleaners />} />
        <Route path="/hosts" element={<Hosts />} />
        <Route path="/how" element={<Accordion />} />

        {/* Rutas específicas después de la Navbar aqui */}
        {personas.map((persona) => (
          <Route key={persona.name} path={persona.name} element={<PersonaView persona={persona} />} />
        ))}
      </Routes>
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <RoutesContainer />
    </Router>
  </React.StrictMode>
);
