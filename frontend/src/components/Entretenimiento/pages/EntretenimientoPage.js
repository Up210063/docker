import React, { useState } from 'react';
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Box,
  Button,
} from '@mui/material';
import { LayoutCMS } from '../../common';
import useFetchMovies from './useFetchMovies';
import Opiniones from '../../../components/common/components/Opiniones';

export const EntretenimientoPage = () => {
  const { movies, loading, error } = useFetchMovies();

  // Función para manejar el click en el botón de ver tráiler
  const handleWatchTrailer = (trailerUrl) => {
    if (trailerUrl) {
      window.open(trailerUrl, '_blank');
    } else {
      alert('Tráiler no disponible');
    }
  };

  // Estado para manejar la expansión de las tarjetas de películas
  const [expandedMovieId, setExpandedMovieId] = useState(null);

  // Manejadores para las tarjetas de películas
  const handleMovieMouseEnter = (movieId) => {
    setExpandedMovieId(movieId);
  };

  const handleMovieMouseLeave = () => {
    setExpandedMovieId(null);
  };

  // Manejadores para las tarjetas de noticias
  const handleNewsMouseEnter = (e) => {
    e.currentTarget.style.transform = 'scale(1.03)';
    e.currentTarget.style.transition = 'transform 0.2s ease-in-out';
  };

  const handleNewsMouseLeave = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
  };

  return (
    <LayoutCMS>
      <Grid container spacing={4} style={{ marginTop: 20 }}>
        <Grid item xs={12} md={8}>
          {/* Noticias Entretenimiento */}
          <Card
            onMouseEnter={handleNewsMouseEnter}
            onMouseLeave={handleNewsMouseLeave}
          >
            <CardMedia
              component="img"
              height="240"
              image="https://www.puromarketing.com/uploads/img/contents/2023/kiYbDK4qFmjt29zc56C3/upload/20230720122846.webp?rand=20230720122846"
              alt="Main news"
            />
            <CardContent>
              <Typography variant="h4" component="div">
                Noticias Entretenimiento
              </Typography>
              <Typography variant="h6" component="div" gutterBottom>
                Cómo el éxito de Barbie ha cambiado la percepción del cine
              </Typography>
            </CardContent>
          </Card>

          <Typography variant="h6" style={{ marginTop: 20 }}>
            Noticias Mundiales
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Card
                onMouseEnter={handleNewsMouseEnter}
                onMouseLeave={handleNewsMouseLeave}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image="https://s3.amazonaws.com/businessinsider.mx/wp-content/uploads/2022/08/11163321/Business_Insider_Mexico_recisio%CC%81n.jpg"
                  alt="Placeholder image"
                />
                <CardContent>
                  <Typography variant="h6">EE.UU.</Typography>
                  <Typography variant="body2" color="text.secondary">
                    La expansión de Hollywood hacia el streaming: ¿Es el futuro?
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card
                onMouseEnter={handleNewsMouseEnter}
                onMouseLeave={handleNewsMouseLeave}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image="https://www.larepublica.ec/wp-content/uploads/2021/10/fESTIVAL-DE-CINE-DE-LONDRES-2021.jpg"
                  alt="Placeholder image"
                />
                <CardContent>
                  <Typography variant="h6">REINO UNIDO</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Festival de cine de Londres: Lo más destacado del año.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={12}>
              <Card
                onMouseEnter={handleNewsMouseEnter}
                onMouseLeave={handleNewsMouseLeave}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image="https://stateless-fueradefoco.storage.googleapis.com/wp-content/uploads/2022/12/29214736/anime-crecimiento-2022-1-1024x622.webp"
                  alt="Placeholder image"
                />
                <CardContent>
                  <Typography variant="h6">JAPÓN</Typography>
                  <Typography variant="body2" color="text.secondary">
                    El auge del anime en Japón está creciendo a niveles exorbitantes.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Typography variant="h6" style={{ marginTop: 20 }}>
            Opiniones
          </Typography>

          <Opiniones />
        </Grid>

        {/* Películas Recientes de la API */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" component="div" gutterBottom>
            Las películas más recientes hasta el momento
          </Typography>
          {loading ? (
            <CircularProgress />
          ) : error ? (
            <Typography color="error">Error al cargar las películas</Typography>
          ) : (
            <Grid container spacing={2}>
              {/* Película más reciente destacada */}
              {movies.length > 0 && (
                <Grid item xs={12}>
                  <Card
                    onMouseEnter={() => handleMovieMouseEnter(movies[0].id)}
                    onMouseLeave={handleMovieMouseLeave}
                    style={{
                      transform: expandedMovieId === movies[0].id ? 'scale(1.03)' : 'scale(1)',
                      transition: 'transform 0.2s ease-in-out',
                      overflow: 'hidden',
                      maxHeight: expandedMovieId === movies[0].id ? '550px' : '360px', // Incrementado para mayor espacio
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="240"
                      image={`https://image.tmdb.org/t/p/w500${movies[0].poster_path}`}
                      alt={movies[0].title}
                    />
                    <CardContent style={{ minHeight: '160px' }}> {/* Aumenta la altura mínima del contenido */}
                      <Typography variant="h6" gutterBottom>
                        {movies[0].title || 'Título no disponible'} ({new Date(movies[0].release_date).toLocaleDateString()})
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        style={{
                          maxHeight: expandedMovieId === movies[0].id ? '200px' : '0px',
                          overflow: 'hidden',
                          transition: 'max-height 0.3s ease',
                        }}
                      >
                        {movies[0].overview}
                      </Typography>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleWatchTrailer(movies[0].trailerUrl)}
                        style={{ marginTop: '10px' }}
                        disabled={!movies[0].trailerUrl}
                      >
                        Ver Tráiler
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              )}
              {/* Otras películas recientes */}
              {movies.slice(1, 4).map((movie) => (
                <Grid item xs={12} key={movie.id}>
                  <Card
                    sx={{ display: 'flex' }}
                    onMouseEnter={() => handleMovieMouseEnter(movie.id)}
                    onMouseLeave={handleMovieMouseLeave}
                    style={{
                      transform: expandedMovieId === movie.id ? 'scale(1.03)' : 'scale(1)',
                      transition: 'transform 0.2s ease-in-out',
                      overflow: 'hidden',
                      maxHeight: expandedMovieId === movie.id ? '500px' : '240px',
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{ width: 120 }}
                      image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                      <CardContent>
                        <Typography variant="h6" gutterBottom>
                          {movie.title} ({new Date(movie.release_date).toLocaleDateString()})
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          style={{
                            maxHeight: expandedMovieId === movie.id ? '200px' : '0px',
                            overflow: 'hidden',
                            transition: 'max-height 0.3s ease',
                          }}
                        >
                          {movie.overview}
                        </Typography>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => handleWatchTrailer(movie.trailerUrl)}
                          style={{ marginTop: '10px' }}
                          disabled={!movie.trailerUrl}
                        >
                          Ver Tráiler
                        </Button>
                      </CardContent>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </Grid>
      </Grid>
    </LayoutCMS>
  );
};
