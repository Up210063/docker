import React, { useState, useEffect } from 'react';
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Box,
  Button,
} from '@mui/material';
import { LayoutCMS } from '../../common';
import Opiniones from '../../../components/common/components/Opiniones';
import { fetchWeatherData } from '../../Clima/pages/weatherApi';
import LocationProvider from '../../Clima/pages/LocationProvider';

export const ClimaPage = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState('');
  const [climateNews, setClimateNews] = useState([]); // Estado para las noticias de clima

  const handleLocationObtained = ({ latitude, longitude }) => {
    fetchWeatherData(latitude, longitude)
      .then((data) => {
        console.log('Datos del clima obtenidos:', data); // Verifica la respuesta de la API
        setWeatherData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  const handleLocationError = (errorMessage) => {
    setError(errorMessage);
    setLoading(false);
  };

  const hoverEffectStyles = {
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  };

  const getWeatherIcon = (icon) => {
    return `https://openweathermap.org/img/wn/${icon}@2x.png`;
  };

  const translateWeatherDescription = (description) => {
    const translations = {
      'clear sky': 'CIELO DESPEJADO',
      'few clouds': 'POCAS NUBES',
      'scattered clouds': 'NUBES DISPERSAS',
      'broken clouds': 'NUBES ROTAS',
      'overcast clouds': 'NUBLADO',
      'shower rain': 'LLUVIA DE CHUBASCOS',
      rain: 'LLUVIA',
      thunderstorm: 'TORMENTA',
      snow: 'NIEVE',
      mist: 'NIEBLA',
      'light rain': 'LLUVIA LIGERA',
      'moderate rain': 'LLUVIA MODERADA',
      'heavy intensity rain': 'LLUVIA INTENSA',
      'very heavy rain': 'LLUVIA MUY INTENSA',
      'extreme rain': 'LLUVIA EXTREMA',
    };
    return translations[description.toLowerCase()] || description.toUpperCase();
  };

  const updateTimeRemaining = () => {
    const now = new Date();
    const endOfDay = new Date(now);
    endOfDay.setHours(23, 59, 59, 999);
    const timeDiff = endOfDay - now;

    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    setTimeRemaining(`${hours}h ${minutes}m ${seconds}s`);
  };

  useEffect(() => {
    const interval = setInterval(updateTimeRemaining, 1000);
    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonte
  }, []);

  // Petición para obtener noticias de clima
  useEffect(() => {
    setLoading(true);
    console.log('Realizando petición fetch para obtener noticias de clima...'); // Log antes de la solicitud

    fetch('http://localhost:8080/api/notices/category/clima')
      .then((response) => {
        console.log('Respuesta recibida:', response); // Log para verificar la respuesta de la API

        if (!response.ok) {
          throw new Error('Error al obtener las noticias de clima');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Datos de noticias de clima recibidos:', data); // Log de los datos recibidos
        setClimateNews(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error al obtener las noticias de clima:', error); // Log de errores
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Function to truncate text to a specified number of words
  const truncateText = (text, maxWords) => {
    const words = text.split(' ');
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ') + '...';
    }
    return text;
  };

  return (
    <LayoutCMS>
      <LocationProvider onLocationObtained={handleLocationObtained} onError={handleLocationError} />

      <Divider style={{ marginTop: 20, marginBottom: 20 }} />
      <Grid container spacing={2} style={{ marginTop: 20 }}>
        <Grid item xs={12} md={8}>
          <Card sx={hoverEffectStyles}>
            <CardMedia
              component="img"
              height="400"
              image="https://www.shutterstock.com/image-photo/heat-thermometer-shows-temperature-hot-600nw-2472353719.jpg"
              alt="Calor"
            />
            <CardContent>
              <Typography fontWeight={'bold'} fontSize={'20px'} mb={1} variant="h5">
                {truncateText('Ola de calor extremo azota varias regiones del país', 8)}
              </Typography>
              <Typography mb={2} variant="body2" color="text.secondary">
                {truncateText(
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                  20
                )}
              </Typography>
              <Button variant="outlined">Leer más</Button>
            </CardContent>
          </Card>

          <Typography
            variant="h6"
            align="center"
            style={{ marginTop: 30, marginBottom: 30 }}
            textAlign={'left'}
            fontWeight={'bold'}
          >
            Últimas Noticias sobre el Clima
          </Typography>
          <Grid container spacing={2}>
            {climateNews.map((newsItem, index) => (
              <Grid item xs={12} sm={4} md={4} key={index}>
                <Card sx={hoverEffectStyles}>
                  <CardMedia
                    component="img"
                    height="240"
                    image={newsItem.img || 'https://via.placeholder.com/240'}
                    alt={newsItem.title}
                  />
                  <CardContent>
                    <Typography variant="h6" color="text.primary" align="center" gutterBottom>
                      {truncateText(newsItem.title, 8)} {/* Mostrar título truncado */}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" align="center" gutterBottom>
                      {truncateText(newsItem.content, 20)} {/* Mostrar contenido truncado */}
                    </Typography>
                    <Button variant="outlined" size="small" color="primary">
                      Leer más
                    </Button>{' '}
                    {/* Botón "Leer más" con estilo consistente */}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item xs={12} md={4}>
          {/* Contenedor del clima actual */}
          <Card sx={hoverEffectStyles}>
            <CardContent>
              {loading ? (
                <Typography variant="body2" align="center">
                  Cargando datos del clima...
                </Typography>
              ) : error ? (
                <Typography variant="body2" align="center" color="error">
                  {error}
                </Typography>
              ) : weatherData ? ( // Verificar si weatherData no es null antes de acceder a sus propiedades
                <Box display="flex" flexDirection="column" alignItems="center">
                  <Typography variant="h6" align="center">
                    Clima Actual
                  </Typography>
                  <Divider style={{ marginBottom: 10 }} />
                  <img
                    src={getWeatherIcon(weatherData.weather[0].icon)}
                    alt="Weather Icon"
                    width={80}
                    style={{ marginBottom: 10 }}
                  />
                  <Typography variant="h4" color="primary" gutterBottom>
                    {weatherData.name}
                  </Typography>
                  <Typography variant="h5" gutterBottom>
                    {`${Math.round(weatherData.main.temp)} °C`}
                  </Typography>
                  <Typography variant="body1" color="textSecondary" gutterBottom>
                    {translateWeatherDescription(weatherData.weather[0].description)}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">{`Viento: ${Math.round(
                    weatherData.wind.speed
                  )} m/s`}</Typography>
                  {/* Contador hasta el fin del día */}
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    align="center"
                    style={{ marginTop: 10 }}
                  >
                    {`Tiempo restante del día: ${timeRemaining}`}
                  </Typography>
                </Box>
              ) : (
                <Typography variant="body2" align="center" color="error">
                  Datos del clima no disponibles
                </Typography>
              )}
            </CardContent>
          </Card>

          <Box sx={hoverEffectStyles} mt={2}>
            <Opiniones />
          </Box>
        </Grid>
      </Grid>
      <Divider style={{ marginTop: 20, marginBottom: 20 }} />
    </LayoutCMS>
  );
};
