import React, { useState, useEffect } from 'react';
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Link as MuiLink,
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

  const handleLocationObtained = ({ latitude, longitude }) => {
    fetchWeatherData(latitude, longitude)
      .then(data => {
        console.log(data); // Verifica la respuesta de la API
        setWeatherData(data);
        setLoading(false);
      })
      .catch(error => {
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
      "clear sky": "CIELO DESPEJADO",
      "few clouds": "POCAS NUBES",
      "scattered clouds": "NUBES DISPERSAS",
      "broken clouds": "NUBES ROTAS",
      "overcast clouds": "NUBLADO",
      "shower rain": "LLUVIA DE CHUBASCOS",
      "rain": "LLUVIA",
      "thunderstorm": "TORMENTA",
      "snow": "NIEVE",
      "mist": "NIEBLA",
      "light rain": "LLUVIA LIGERA",
      "moderate rain": "LLUVIA MODERADA",
      "heavy intensity rain": "LLUVIA INTENSA",
      "very heavy rain": "LLUVIA MUY INTENSA",
      "extreme rain": "LLUVIA EXTREMA",
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

  return (
    <LayoutCMS>
      <LocationProvider
        onLocationObtained={handleLocationObtained}
        onError={handleLocationError}
      />

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
              <Typography fontWeight={"bold"} fontSize={"20px"} mb={1} variant="h5">Ola de calor extremo azota varias regiones del país</Typography>
              <Typography mb={2} variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
              <Button variant='outlined'>Leer más</Button>
            </CardContent>
          </Card>

          <Typography variant="h6" align="center" style={{ marginTop: 30, marginBottom: 30 }} textAlign={"left"} fontWeight={"bold"}>Últimas Noticias sobre el Clima</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4} md={4}>
              <Card sx={hoverEffectStyles}>
                <CardMedia
                  component="img"
                  height="240"
                  image="https://imagens.ebc.com.br/NIaL1xHAQmZYigUk4LRjiXzUr08=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/2024/03/22/_mg_0378.jpg?itok=GeXBmcOS"
                  alt="Noticia 1"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary" align="center">
                    {`Párrafo de texto con un `}<MuiLink href="#">enlace no asignado</MuiLink>.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={4} md={4}>
              <Card sx={hoverEffectStyles}>
                <CardMedia
                  component="img"
                  height="240"
                  image="https://www.nmas.com.mx/_next/image/?url=https%3A%2F%2Fstatic-live.nmas.com.mx%2Fnmas-news%2Fstyles%2Fcorte_16_9%2Fcloud-storage%2F2023-11%2Facapulco-otis-apoyos-amlo.jpg%3Fh%3D920929c4%26itok%3DTljX35jc&w=1920&q=75"
                  alt="Noticia 2"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary" align="center">
                    {`Párrafo de texto con un `}<MuiLink href="#">enlace no asignado</MuiLink>.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={4} md={4}>
              <Card sx={hoverEffectStyles}>
                <CardMedia
                  component="img"
                  height="240"
                  image="https://larepublica.cronosmedia.glr.pe/original/2024/01/09/659dbb20324d0b6bf724c4e8.jpg"
                  alt="Noticia 3"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary" align="center">
                    {`Párrafo de texto con un `}<MuiLink href="#">enlace no asignado</MuiLink>.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={4} md={4}>
              <Card sx={hoverEffectStyles}>
                <CardMedia
                  component="img"
                  height="240"
                  image="https://tvazteca.brightspotcdn.com/dims4/default/96f05d6/2147483647/strip/true/crop/1500x1000+0+0/resize/968x645!/format/jpg/quality/90/?url=http%3A%2F%2Ftv-azteca-brightspot.s3.amazonaws.com%2Fb7%2Fa7%2F411e761340ac906a30f1c2e7cbdd%2Fheladas.jpg"
                  alt="Noticia 4"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary" align="center">
                    {`Párrafo de texto con un `}<MuiLink href="#">enlace no asignado</MuiLink>.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={4} md={4}>
              <Card sx={hoverEffectStyles}>
                <CardMedia
                  component="img"
                  height="240"
                  image="https://cdn.unotv.com/images/2023/11/lluvias-en-cdmx-044707-041851.jpg"
                  alt="Noticia 5"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary" align="center">
                    {`Párrafo de texto con un `}<MuiLink href="#">enlace no asignado</MuiLink>.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={4} md={4}>
              <Card sx={hoverEffectStyles}>
                <CardMedia
                  component="img"
                  height="240"
                  image="https://www.nmas.com.mx/_next/image/?url=https%3A%2F%2Fstatic-live.nmas.com.mx%2Fnmas-news%2Fstyles%2Fcorte_16_9%2Fcloud-storage%2F2023-11%2Fclima-frio-tijuana.jpg%3Fh%3D920929c4%26itok%3D9SndVk2z&w=1920&q=75"
                  alt="Noticia 6"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary" align="center">
                    {`Párrafo de texto con un `}<MuiLink href="#">enlace no asignado</MuiLink>.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={4}>
          {/* Contenedor del clima actual */}
          <Card sx={hoverEffectStyles}>
            <CardContent>
              {loading ? (
                <Typography variant="body2" align="center">Cargando datos del clima...</Typography>
              ) : error ? (
                <Typography variant="body2" align="center" color="error">{error}</Typography>
              ) : (
                <Box display="flex" flexDirection="column" alignItems="center">
                  <Typography variant="h6" align="center">Clima Actual</Typography>
                  <Divider style={{ marginBottom: 10 }} />
                  <img src={getWeatherIcon(weatherData.weather[0].icon)} alt="Weather Icon" width={80} style={{ marginBottom: 10 }} />
                  <Typography variant="h4" color="primary" gutterBottom>{weatherData.name}</Typography>
                  <Typography variant="h5" gutterBottom>{`${Math.round(weatherData.main.temp)} °C`}</Typography>
                  <Typography variant="body1" color="textSecondary" gutterBottom>
                    {translateWeatherDescription(weatherData.weather[0].description)}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">{`Viento: ${Math.round(weatherData.wind.speed)} m/s`}</Typography>
                  {/* Contador hasta el fin del día */}
                  <Typography variant="body2" color="textSecondary" align="center" style={{ marginTop: 10 }}>
                    {`Tiempo restante del día: ${timeRemaining}`}
                  </Typography>
                </Box>
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
