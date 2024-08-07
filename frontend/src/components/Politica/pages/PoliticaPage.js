import React, { useState, useEffect } from 'react';
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
  Button
} from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { LayoutCMS } from '../../common';
import Slider from 'react-slick';

// Import styles from slick-carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const PoliticaPage = () => {
  const [politicalNews, setPoliticalNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Carousel configuration
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  const cardStyle = {
    height: "370px",
    border: '1px solid #ddd',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    position: 'relative',
    '&:hover': {
      transform: 'scale(1.03)', // Reduce the scale factor for hover effect
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    },
  };

  // Fetch political news from the API
  useEffect(() => {
    const fetchPoliticalNews = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:8080/api/notices/category/politica");
        if (!response.ok) {
          throw new Error('Error fetching political news');
        }
        const data = await response.json();
        setPoliticalNews(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching political news:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPoliticalNews();
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
      <Grid container spacing={2} className='politica'>
        <Grid item xs={12} md={8}>
          <Box className='politica-hero'>
            <Box className='politica-hero-content'>
              <Typography variant="h4" component="div">
                Política
              </Typography>
              <Typography variant="h6" component="div">
                Nueva presidenta de México arma gabinete con miembros del gobierno saliente y exfuncionarios
              </Typography>
            </Box>
            <Box className="politica-overlay"></Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" textAlign={"center"} fontWeight={"700"}>Últimas Noticias</Typography>
          <List>
            <ListItem>
              <ListItemText primary="Checo Pérez con la urgencia de repuntar en el GP de España" secondary="23:30" />
              <RemoveRedEyeIcon />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="Scaloni y jugadores de Argentina se quejan de la cancha tras debut" secondary="23:45" />
              <RemoveRedEyeIcon />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="Julián Quiñones dejó al América luego de un año y tres títulos" secondary="23:54" />
              <RemoveRedEyeIcon />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="Yucatán mantiene liderazgo en seguridad con la tasa delictiva" secondary="23:59" />
              <RemoveRedEyeIcon />
            </ListItem>
          </List>
        </Grid>

        {/* Noticias Mundiales con Carrusel */}
        <Grid item xs={12} marginTop={"30px"}>
          <Typography variant="h6" fontWeight={"700"} mb={5}>Noticias Mundiales</Typography>
          <Grid item xs={12}>
            {loading ? (
              <Typography variant="body2" align="center">Cargando noticias de política...</Typography>
            ) : error ? (
              <Typography variant="body2" align="center" color="error">{error}</Typography>
            ) : (
              <Slider {...settings}>
                {politicalNews.length > 0 ? politicalNews.map((newsItem, index) => (
                  <div key={index}>
                    <Card sx={cardStyle} style={{ margin: '0 10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <CardMedia
                        component="img"
                        height="250"
                        image={newsItem.img || "https://via.placeholder.com/250"}
                        alt={newsItem.title || 'Noticia sin título'}
                        onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/250"; }}
                      />
                      <CardContent>
                        <Typography variant="h6">{truncateText(newsItem.title, 8)}</Typography> {/* Truncate title */}
                        <Typography variant="body2" color="text.secondary">
                          {truncateText(newsItem.content, 20)} {/* Truncate content */}
                        </Typography>
                      </CardContent>
                      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: 2 }}>
                        <Button 
                          variant='outlined' 
                          size='small' 
                          color='primary' 
                          sx={{ width: '90%' }} // Ensure the button takes the majority of the card's width
                        >
                          Leer más
                        </Button>
                      </Box>
                    </Card>
                  </div>
                )) : (
                  <div>
                    <Card sx={cardStyle} style={{ margin: '0 10px' }}>
                      <CardContent>
                        <Typography variant="body2" align="center">No hay noticias de política disponibles</Typography>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </Slider>
            )}
          </Grid>
        </Grid>
      </Grid>
    </LayoutCMS>
  );
};
