import React from 'react';
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Divider,
  Box,
} from '@mui/material';
import { LayoutCMS } from '../../common';

import { SwiperCom } from '../../common/components/Swiper';
import Opiniones from '../../../components/common/components/Opiniones';

const containerStyles = {
  marginBottom: '2rem',
};

const containerStyles2 = {
  borderTop: "1px solid #ddd",
  gap: "1rem",
}

export const TendenciasPage = () => {
  return (
    <LayoutCMS>
      <SwiperCom />

      <Grid container spacing={2} display={"grid"} className='tendencias-grid'>

        <Grid className='tendencias-section' display={"grid"} item xs={12} style={ containerStyles2 }>

          <Grid item xs={12} md={12} xl={12} mb={3} pb={5} borderBottom={"1px solid #ddd"}>
            <Typography variant="h6" textAlign={'center'} mb={3}>
              Automovilismo
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} mb={2}>
                <Card className='tendencias-card'>
                  <CardMedia
                    sx={{ flex: 1, height:"10rem", width: "9.5rem" }}
                    component="img"
                    image="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/73XD2AQRUNHNXOYAZYUKVEJVGM.jpg"
                    alt="Clima noticia 1"
                  />
                  <CardContent
                    sx={{ flex: 3, display: 'grid', placeContent: 'start', alignContent: 'center' }}
                  >
                    <Typography mb={2} variant="body2" color="text.secondary">
                      Breve descripción sobre el clima reciente en la región.
                    </Typography>
                    <Button variant="outlined" size="small">
                      Conoce más
                    </Button>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} mb={2}>
                <Card className='tendencias-card'>
                  <CardMedia
                    sx={{ flex: 1, height:"10rem", width: "9.5rem" }}
                    component="img"
                    image="https://library.sportingnews.com/styles/crop_style_16_9_desktop/s3/2023-02/nba-plain--5a35d13f-c0ee-4740-bb0d-357b329fd4db.png?itok=R6Y5e-bq"
                    alt="Clima noticia 2"
                  />
                  <CardContent
                    sx={{ flex: 3, display: 'grid', placeContent: 'start', alignContent: 'center' }}
                  >
                    <Typography mb={2} variant="body2" color="text.secondary">
                      Información sobre alertas meteorológicas y su impacto en el mundo animal.
                    </Typography>
                    <Button variant="outlined" size="small">
                      Conoce más
                    </Button>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12}>
                <Card className='tendencias-card tendencias-card-last'>
                  <img
                    className="tendencias-last-image"
                    src="https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5KwJdxgQljUhdAthYxiUWOmRBxP7LmOne0a82jxBbhuanKEIFdo.jpg"
                    alt="Clima noticia grande"
                  />
                  <Box className="last-text">
                    <Typography mb={4} variant="body2" color="text.secondary">
                      Aute fugiat laboris pariatur ea non laboris veniam velit
                      enim labore exercitation ea. Anim minim quis qui minim
                      nostrud occaecat nulla culpa labore amet exercitation
                      quis.
                    </Typography>
                    <Button variant="outlined" size="small">
                      Conoce más
                    </Button>
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={12} mb={3} pb={5} borderBottom={"1px solid #ddd"} >
            <Typography variant="h6" textAlign={'center'} mb={3}>
              Deportes
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} mb={2}>
                <Card className='tendencias-card'>
                  <CardMedia
                    sx={{ flex: 1, height:"10rem", width: "9.5rem" }}
                    component="img"
                    image="https://phantom-marca-mx.unidadeditorial.es/d06208380777fd753c2b0e2e0230f3bb/resize/828/f/jpg/mx/assets/multimedia/imagenes/2024/01/01/17041309569538.jpg"
                    alt="Clima noticia 1"
                  />
                  <CardContent
                    sx={{ flex: 3, display: 'grid', placeContent: 'start', alignContent: 'center' }}
                  >
                    <Typography mb={2} variant="body2" color="text.secondary">
                      Breve descripción sobre el clima reciente en la región.
                    </Typography>
                    <Button variant="outlined" size="small">
                      Conoce más
                    </Button>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} mb={2}>
                <Card className='tendencias-card'>
                  <CardMedia
                    sx={{ flex: 1, height:"10rem", width: "9.5rem" }}
                    component="img"
                    image="https://www.clarin.com/img/2024/07/30/TAYzcu-sU_2000x1500__2.jpg"
                    alt="Clima noticia 2"
                  />
                  <CardContent
                    sx={{ flex: 3, display: 'grid', placeContent: 'start', alignContent: 'center' }}
                  >
                    <Typography mb={2} variant="body2" color="text.secondary">
                      Información sobre alertas meteorológicas y su impacto.
                    </Typography>
                    <Button variant="outlined" size="small">
                      Conoce más
                    </Button>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12}>
                <Card className='tendencias-card tendencias-card-last'>
                  <img
                    className="tendencias-last-image"
                    src="https://www.ole.com.ar/images/2024/03/14/qwKoOeQZM_660x385__1.jpg"
                    alt="Clima noticia grande"
                  />
                  <Box className="last-text">
                    <Typography mb={4} variant="body2" color="text.secondary">
                      Aute fugiat laboris pariatur ea non laboris veniam velit
                      enim labore exercitation ea. Anim minim quis qui minim
                      nostrud occaecat nulla culpa labore amet exercitation
                      quis.
                    </Typography>
                    <Button variant="outlined" size="small">
                      Conoce más
                    </Button>
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
            <Typography variant="h6" textAlign={'center'} mb={3}>
              Educación
            </Typography>
            <Grid container spacing={2} mb={2}>
              <Grid item xs={12}>
                <Card className='tendencias-card'>
                  <CardMedia
                    sx={{ flex: 1, height: "12rem", width: "12rem" }}
                    component="img"
                    height="200rem"
                    image="https://www.jornada.com.mx/ndjsimg/images/jornada/jornadaimg/consolida-planes-de-educacion-y-salud-el-presupuesto-de-2024-8384/consolida-planes-de-educacion-y-salud-el-presupuesto-de-2024-8384html-escuelajpeg-6361html-cd10aec4-7b5f-40fa-9847-488f87e41748.jpegrawimage=true"
                    alt="Clima noticia 1"
                  />
                  <CardContent
                    sx={{ flex: 3, display: 'grid', placeContent: 'center' }}
                  >
                    <Typography mb={2} variant="body2" color="text.secondary">
                      Breve descripción sobre el clima reciente en la región.
                    </Typography>
                    <Button variant="outlined" size="small">
                      Conoce más
                    </Button>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12}>
                <Card className='tendencias-card'>
                  <CardMedia
                    sx={{ flex: 1, height: "12rem", width: "12rem" }}
                    component="img"
                    height="200rem"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwc5SQGM1XBLCFyt9CiKIqjQ9LptEol9yysNdxC1-P9-yKYQ_dqw8TRk4qywjK3eic0U0&usqp=CAU"
                    alt="Clima noticia 2"
                  />
                  <CardContent
                    sx={{ flex: 3, display: 'grid', placeContent: 'center' }}
                  >
                    <Typography mb={2} variant="body2" color="text.secondary">
                      Información sobre alertas meteorológicas y su impacto.
                    </Typography>
                    <Button variant="outlined" size="small">
                      Conoce más
                    </Button>
                  </CardContent>
                </Card>
              </Grid>

            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
            <Typography variant="h6" textAlign={'center'} mb={3}>
              Actores
            </Typography>
            <Grid container spacing={2} mb={2}>
              <Grid item xs={12}>
                <Card className='tendencias-card'>
                  <CardMedia
                    sx={{ flex: 1, height: "12rem", width: "12rem" }}
                    component="img"
                    height="200rem"
                    image="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2024/03/01/17093055298971.jpg"
                    alt="Clima noticia 1"
                  />
                  <CardContent
                    sx={{ flex: 3, display: 'grid', placeContent: 'center' }}
                  >
                    <Typography mb={2} variant="body2" color="text.secondary">
                      Breve descripción sobre el clima reciente en la región.
                    </Typography>
                    <Button variant="outlined" size="small">
                      Conoce más
                    </Button>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12}>
                <Card className='tendencias-card'>
                  <CardMedia
                    sx={{ flex: 1, height: "12rem", width: "12rem" }}
                    component="img"
                    height="200rem"
                    image="https://people.com/thmb/H7hhnpADs_4sA2FMSbZtNk80G20=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(714x207:716x209)/cillian-murphy-best-actor-oscars-los-angeles-031024_2052-c62787a332ba459fbba65b934abfb7eb.jpg"
                    alt="Clima noticia 2"
                  />
                  <CardContent
                    sx={{ flex: 3, display: 'grid', placeContent: 'center' }}
                  >
                    <Typography mb={2} variant="body2" color="text.secondary">
                      Información sobre alertas meteorológicas y su impacto.
                    </Typography>
                    <Button variant="outlined" size="small">
                      Conoce más
                    </Button>
                  </CardContent>
                </Card>
              </Grid>

            </Grid>
          </Grid>

        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6">Opiniones</Typography>
          <Opiniones />
        </Grid>

      </Grid>
    </LayoutCMS>
  );
};
