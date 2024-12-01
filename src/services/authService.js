import api from '../api'; // Assure-toi que le fichier api.js est configuré avec Axios

// Fonction pour enregistrer un utilisateur
export async function registerUser(data) {
  try {
    const response = await api.post('/auth/register', data); // Appelle le backend
    return response.data; // Retourne les données de réponse
  } catch (error) {
    throw error.response.data; // Propager l'erreur pour gestion dans le composant
  }
}

// Fonction pour connecter un utilisateur
export async function loginUser(data) {
  try {
    const response = await api.post('/auth/login', data); // Appelle le backend
    return response.data; // Retourne le jeton ou les données utilisateur
  } catch (error) {
    throw error.response.data; // Propager l'erreur pour gestion dans le composant
  }
}
