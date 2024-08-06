// src/components/Opiniones.jsx
import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, Divider, Typography } from '@mui/material';

const Opiniones = () => {
  const [autores, setAutores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComentarios = async () => {
      try {
        const response = await fetch('http://localhost:8080/comentarios');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setAutores(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchComentarios();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <List>
      {autores.map((autor, index) => (
        <React.Fragment key={index}>
          <ListItem>
            <ListItemText 
              primary={autor[0]} 
              secondary={autor[1]} 
            />
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
};

export default Opiniones;
