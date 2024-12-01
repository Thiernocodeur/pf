// src/components/AuthForm.jsx
import React, { useState } from 'react';
import { registerUser } from '../services/authService'; // Importer la fonction depuis authService

export const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = { email, password };
      const response = await registerUser(data); // Appeler la fonction registerUser
      console.log('Utilisateur enregistré :', response);
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement :', error);
    }
  };

  return (
    <div>
      <h2>Inscription</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email :
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Mot de passe :
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};
