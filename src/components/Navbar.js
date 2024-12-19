import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Connexion</Link>
      <Link to="/register">Inscription</Link>
      <Link to="/home">Accueil</Link>
      <Link to="/add-annonce">Ajouter une annonce</Link>
    </nav>
  );
};

export default Navbar;
