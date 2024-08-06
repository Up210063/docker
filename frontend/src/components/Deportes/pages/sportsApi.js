// src/services/sportsApi.js

import axios from "axios";

// Función para obtener los datos de la NBA
export const fetchNBAStandings = async () => {
  try {
    const response = await axios.get(
      "https://api.sportsdata.io/v3/nba/scores/json/Standings/2024?key=42a23e46766b49e5a967b31ee255d68e"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching NBA standings:", error);
    throw error; // Lanza el error para que pueda ser manejado donde se llame la función
  }
};

// Función para obtener los datos de la MLB
export const fetchMLBStandings = async () => {
  try {
    const response = await axios.get(
      "https://api.sportsdata.io/v3/mlb/scores/json/Standings/2024?key=ee37068503f54e5ca2cd17990a04b07a"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching MLB standings:", error);
    throw error; // Lanza el error para que pueda ser manejado donde se llame la función
  }
};
