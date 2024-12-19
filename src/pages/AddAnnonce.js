import React, { useState } from 'react';
import axios from 'axios';

const AddAnnonce = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");  // Ajouter un état pour les erreurs
  const token = localStorage.getItem("token");
  const handleAddAnnonce = async () => {
    if (!token) {
        setError("Vous devez être connecté pour ajouter une annonce");
        return;  // Arrêter la fonction si le token est manquant
      }
    const newAnnonce = {
      title,
      description,
      price,
    };
    
      
    try {
      await axios.post('http://localhost:3004/api/announcements', newAnnonce, {
        headers: {
          Authorization: "Bearer " + token,
        },
     });
      alert('Annonce ajoutée avec succès');
      setTitle("");  // Réinitialiser les champs après l'ajout
      setDescription("");
      setPrice("");
      setError("");  // Réinitialiser l'erreur

    } catch (error) {
      // Gestion des erreurs avec des messages plus précis
      if (error.response) {
        // Si la réponse du backend est présente
        setError(error.response.data.message || "Erreur lors de l'ajout de l'annonce");
      } else {
        // Erreur liée à la requête (par exemple, problème réseau)
        setError("Erreur de connexion au serveur");
      }
    }
  };

  return (
    <div>
      <h2>Ajouter une annonce</h2>
      <input
        type="text"
        placeholder="Titre de l'annonce"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description de l'annonce"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Prix"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handleAddAnnonce}>Ajouter</button>
    </div>
  );
};

export default AddAnnonce;
