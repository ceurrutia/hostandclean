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

const RoutesContainer = () => {
  return (
    <>
      <Navbar /> {/* Colocar la Navbar fuera de las rutas */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactForm />} />
        {/* Coloca las rutas específicas después de la Navbar */}
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
