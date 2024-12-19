import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [annonces, setAnnonces] = useState([]);

  const [loading, setLoading] = useState(true); // Ajouter ici
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnnonces = async () => {
        try {
          const response = await axios.get('http://localhost:3004/api/announcements');
          setAnnonces(response.data);
          setLoading(false); // Fin du chargement
        } catch (error) {
          setError('Erreur lors du chargement des annonces');
          setLoading(false); // Fin du chargement même en cas d'erreur
        }
      };
    fetchAnnonces();

    
  }, []);

  const deleteAnnonce = async (id) => {
    try {
      await axios.delete(`http://localhost:3004/api/announcements/${id}`,  {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    });
      // Supprimer l'annonce du tableau local
      setAnnonces(annonces.filter((annonce) => annonce._id !== id));
    } catch (error) {
      setError('Erreur lors de la suppression de l\'annonce');
    }
  };

  if (loading) {
    return <div>Chargement des annonces...</div>; // Ajouter ici
  }

  if (error) {
    return <div style={{ color: 'red' }}>{error}</div>; // Ajouter ici
  }

  return (
    <div>
      <h2>Liste des annonces</h2>
      {annonces.map((annonce) => (
        <div key={annonce._id}>
          <h3>{annonce.title}</h3>
          <p>{annonce.description}</p>
          <button onClick={() => deleteAnnonce(annonce._id)}>
            Supprimer l'annonce
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;
