// src/components/LocationProvider.js

import React, { useState, useEffect } from 'react';

const LocationProvider = ({ onLocationObtained, onError }) => {
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          onLocationObtained({ latitude, longitude });
        },
        (error) => {
          onError(error.message);
        }
      );
    } else {
      onError('Geolocation is not supported by this browser');
    }
  }, []);

  return null; // Este componente no necesita renderizar nada
};

export default LocationProvider;
