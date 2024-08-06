import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Tabs,
  Tab,
  Box,
  Link as MuiLink,
  Fade,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
} from '@mui/material';
import { LayoutCMS } from '../../common';
import {
  fetchNBAStandings,
  fetchMLBStandings,
} from '../../Deportes/pages/sportsApi';
import {
  NbaStandingsTable,
  MlbStandingsTable,
} from '../../Deportes/pages/standingsTables';
import Opiniones from '../../../components/common/components/Opiniones';

export const DeportesPage = () => {
  const [contentTabValue, setContentTabValue] = useState(0); // Estado para las pestañas de contenido
  const [standingsTabValue, setStandingsTabValue] = useState(0); // Estado para las pestañas de standings
  const [nbaStandings, setNbaStandings] = useState([]);
  const [mlbStandings, setMlbStandings] = useState([]);
  const [visibleTeams, setVisibleTeams] = useState(10);

  const cardHeight = 320;

  const handleContentTabChange = (event, newValue) => {
    setContentTabValue(newValue);
  };

  const handleStandingsTabChange = (event, newValue) => {
    setStandingsTabValue(newValue);
  };

  const handleVisibleTeamsChange = (event) => {
    setVisibleTeams(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (standingsTabValue === 0) {
          const data = await fetchNBAStandings();
          setNbaStandings(data);
        } else if (standingsTabValue === 1) {
          const data = await fetchMLBStandings();
          setMlbStandings(data);
        }
      } catch (error) {
        console.error('Error fetching standings:', error);
      }
    };

    fetchData();
  }, [standingsTabValue]);

  const cardStyle = {
    height: cardHeight,
    border: '1px solid #ddd',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    position: 'relative',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    },
  };

  return (
    <LayoutCMS>
      <Grid item xs={12} md={12} lg={9} className='deportes-top'>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={cardStyle}>
              <CardContent>
                <Typography fontWeight={700} variant="body1" mb={2}>
                  Lo último
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Esta es la mejor sección de deportes, donde encontrarás las
                  últimas noticias y actualizaciones del mundo deportivo. Desde
                  el fútbol hasta el baloncesto, cubrimos todas las disciplinas
                  con análisis detallados, entrevistas exclusivas y reportajes
                  en profundidad. <br /> <br />
                  Entérate de las tendencias y disciplinas más solicitados por
                  los espectadores en cualquier momento del día.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={cardStyle}>
              <CardMedia
                component="img"
                height="220"
                image="https://tvazteca.brightspotcdn.com/98/7f/814862b949a491253cc74484f13d/mazatlan-vs-nashville-leagues-cup.jpeg"
                alt="Placeholder image"
              />
              <CardContent>
                <Typography mb={1} variant="body2" color="text.secondary">
                  Mazatlán vs Nashville, un emocionante partido que se lleva
                  Mazatlán por un marcador 2-0..
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button variant="text">Leer más</Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={cardStyle}>
              <CardMedia
                component="img"
                height="220"
                image="https://www.tudn.com/api/image/x/us/futbol/tormenta-electrica-retrasa-el-inicio-del-segundo-tiempo-entre-toluca-y-chicago-video"
                alt="Placeholder image"
              />
              <CardContent>
                <Typography mb={1} variant="body2" color="text.secondary">
                  Una tormenta eléctrica retrasa el segundo tiempo del partido
                  Toluca vs Chicago Fire.
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button variant="text">Leer más</Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={cardStyle}>
              <CardMedia
                component="img"
                height="220"
                image="https://cdn.milenio.com/uploads/media/2024/07/30/fc-juarez-vs-dallas-canal.jpeg"
                alt="Placeholder image"
              />
              <CardContent>
                <Typography mb={1} variant="body2" color="text.secondary">
                  FC DALLAS 0-2 FC JUÁREZ | Salieron BRAVOS los fronterizos.
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button variant="text">Leer más</Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={2} display={'flex'} className='deportes-center'>
        <Grid item xs={12} lg={9} md={9} borderTop={"1px solid #aaa"} padding={"30px 0"}>
          <Grid item xs={12}>
            <Typography mb={2} variant="h6" fontWeight={"bold"} style={{ marginTop: 20 }}>
              Videos, Relatos, Blogposts
            </Typography>
            <Card>
              <Tabs
                value={contentTabValue}
                onChange={handleContentTabChange}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
              >
                <Tab label="Videos" />
                <Tab label="Relatos" />
                <Tab label="Blogposts" />
              </Tabs>
              <CardContent>
                <Fade in={contentTabValue === 0} timeout={500}>
                  <Box display={contentTabValue === 0 ? 'block' : 'none'}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6} style={{ display: "grid", placeContent: "center"}} p={3} >
                        <Typography variant='h6' component="h4" fontWeight={"700"} mb={2}>Titulo de noticia</Typography>
                        <Typography variant="body2" color="text.secondary" mb={2}>
                          Ut dolor ad cillum reprehenderit nisi qui excepteur velit. Irure deserunt nisi laboris excepteur mollit laborum adipisicing deserunt ex exercitation esse excepteur excepteur. Adipisicing eiusmod cillum irure nulla labore sit nostrud consectetur reprehenderit magna.
                        </Typography>
                        <Button variant='outlined'>Leer Más</Button>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <CardMedia
                          component="img"
                          style={{ height: "300px" }}
                          image="https://media.gettyimages.com/id/2162028863/es/foto/berlin-germany-alvaro-morata-of-spain-lifts-the-uefa-euro-2024-henri-delaunay-trophy-after-his.jpg?s=612x612&w=0&k=20&c=t7Vh8oegwApNsd4d6OLgCk4UEeBKMp1zyrxkY4E63J8="
                          alt="Placeholder image"
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </Fade>

                <Fade in={contentTabValue === 1} timeout={500}>
                  <Box display={contentTabValue === 1 ? 'block' : 'none'}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6} style={{ display: "grid", placeContent: "center"}} p={3} >
                        <Typography variant='h6' component="h4" fontWeight={"700"} mb={2}>Titulo de noticia</Typography>
                        <Typography variant="body2" color="text.secondary" mb={2}>
                          Ut dolor ad cillum reprehenderit nisi qui excepteur velit. Irure deserunt nisi laboris excepteur mollit laborum adipisicing deserunt ex exercitation esse excepteur excepteur. Adipisicing eiusmod cillum irure nulla labore sit nostrud consectetur reprehenderit magna.
                        </Typography>
                        <Button variant='outlined'>Leer Más</Button>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <CardMedia
                          component="img"
                          style={{ height: "300px" }}
                          image="https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2016/09/575045-asi-fue-primera-entrevista-cristiano-ronaldo.jpg?tf=3840"
                          alt="Placeholder image"
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </Fade>

                <Fade in={contentTabValue === 2} timeout={500}>
                  <Box display={contentTabValue === 2 ? 'block' : 'none'}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6} style={{ display: "grid", placeContent: "center"}} p={3} >
                        <Typography variant='h6' component="h4" fontWeight={"700"} mb={2}>Titulo de noticia</Typography>
                        <Typography variant="body2" color="text.secondary" mb={2}>
                          Ut dolor ad cillum reprehenderit nisi qui excepteur velit. Irure deserunt nisi laboris excepteur mollit laborum adipisicing deserunt ex exercitation esse excepteur excepteur. Adipisicing eiusmod cillum irure nulla labore sit nostrud consectetur reprehenderit magna.
                        </Typography>
                        <Button variant='outlined'>Leer Más</Button>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <CardMedia
                          component="img"
                          style={{ height: "300px" }}
                          image="https://s.france24.com/media/display/8af2bf28-6c83-11ea-9c66-005056a964fe/Olimpicos%20coronavirus.jpg"
                          alt="Placeholder image"
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </Fade>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} marginTop={"50px"}>
            <Typography variant="h6" fontWeight={"700"} mb={2} style={{ marginTop: 20 }}>
              Tabla de Posiciones
            </Typography>
            <Card>
              <Tabs
                value={standingsTabValue}
                onChange={handleStandingsTabChange}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
              >
                <Tab label="NBA" />
                <Tab label="MLB" />
              </Tabs>
              <CardContent className='deportes-table'>
                <FormControl
                  variant="outlined"
                  className='deportes-select'
                >
                  <InputLabel id="visible-teams-label">
                    Equipos a mostrar
                  </InputLabel>
                  <Select
                    labelId="visible-teams-label"
                    value={visibleTeams}
                    onChange={handleVisibleTeamsChange}
                    label="Equipos a mostrar"
                  >
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                    <MenuItem value={nbaStandings.length}>Todos</MenuItem>{' '}
                    {/* Opción para mostrar todos */}
                  </Select>
                </FormControl>

                {/* Tab de la NBA */}
                <Box style={{ marginTop: "30px"}} in={standingsTabValue === 0} timeout={500}>
                  <Box display={standingsTabValue === 0 ? 'block' : 'none'}>
                    <NbaStandingsTable
                      nbaStandings={nbaStandings}
                      visibleTeams={
                        visibleTeams === nbaStandings.length
                          ? nbaStandings.length
                          : visibleTeams
                      }
                    />
                  </Box>
                </Box>

                {/* Tab de la MLB */}
                <Box style={{ marginTop: "30px"}} in={standingsTabValue === 1} timeout={500}>
                  <Box display={standingsTabValue === 1 ? 'block' : 'none'}>
                    <MlbStandingsTable
                      mlbStandings={mlbStandings}
                      visibleTeams={
                        visibleTeams === mlbStandings.length
                          ? mlbStandings.length
                          : visibleTeams
                      }
                    />
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={3}>
          <Typography variant="h6">Opiniones</Typography>
          <Opiniones />
        </Grid>
      </Grid>

    </LayoutCMS>
  );
};
