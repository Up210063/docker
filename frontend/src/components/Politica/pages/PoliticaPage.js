import React from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab, Container, Grid, Card, CardContent, CardMedia, List, ListItem, ListItemText, Divider, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { LayoutCMS } from '../../common';

export const PoliticaPage = () => {
  return (
    <LayoutCMS>
        <Grid container spacing={2} className='politica'>
          <Grid item xs={12} md={8}>
            <Box className='politica-hero'>
              <Box className='politica-hero-content'>
                <p variant="h4" component="div">
                  Política
                </p>
                <p variant="h6" component="div">
                  Nueva presidenta de México arma gabinete con miembros del gobierno saliente y exfuncionarios
                </p>
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
          <Grid item xs={12} marginTop={"30px"}>
            <Typography variant="h6" fontWeight={"700"} mb={5}>Noticias Mundiales</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Card sx={{ height: "370px"}}>
                  <CardMedia
                    component="img"
                    height="250"
                    image="https://s.france24.com/media/display/6d1b4c0a-8aa2-11ed-b3ac-005056a90284/w:980/p:16x9/AP22360508997060-1.jpg"
                    alt="Placeholder image"
                  />
                  <CardContent>
                    <Typography variant="h6">Ucrania</Typography>
                    <Typography variant="body2" color="text.secondary">
                      EE.UU. amplía su política para permitir que Ucrania contraataque a Rusia
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card sx={{ height: "370px"}}>
                  <CardMedia
                    component="img"
                    height="250"
                    image="https://static.hosteltur.com/app/public/uploads/img/articles/2023/01/05/L_125233_rel-et-china-enero23.jpg"
                    alt="Placeholder image"
                  />
                  <CardContent>
                    <Typography variant="h6">China</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Escenas impactantes: guardacostas chinos atacan barcos filipinos
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card sx={{ height: "370px"}}>
                  <CardMedia
                    component="img"
                    height="250"
                    image="https://fotos.perfil.com/2023/11/15/trim/636/361/union-europea-1698334.jpg"
                    alt="Placeholder image"
                  />
                  <CardContent>
                    <Typography variant="h6">Europa</Typography>
                    <Typography variant="body2" color="text.secondary">
                      El volcán Etna vuelve a la actividad con un llamativo fenómeno
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} marginTop={"30px"} marginBottom={"30px"}>
            <Typography variant="h6" fontWeight={"700"} mb={5}>Noticias Nacionales</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Card sx={{ height: "370px"}}>
                  <CardMedia
                    component="img"
                    height="250"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg40iGFauh6AAUk78wxva9Lx3HGGGNrCpCEw&s"
                    alt="Placeholder image"
                  />
                  <CardContent>
                    <Typography variant="h6">Aguascalientes</Typography>
                    <Typography variant="body2" color="text.secondary">
                      EE.UU. amplía su política para permitir que Ucrania contraataque a Rusia
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card sx={{ height: "370px"}}>
                  <CardMedia
                    component="img"
                    height="250"
                    image="https://ap-cdn.sfo3.digitaloceanspaces.com/uploads/2023/06/renunciar-Sheinbaum-estatutos-Morena.jpg"
                    alt="Placeholder image"
                  />
                  <CardContent>
                    <Typography variant="h6">Ciudad de México</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Escenas impactantes: guardacostas chinos atacan barcos filipinos
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card sx={{ height: "370px"}}>
                  <CardMedia
                    component="img"
                    height="250"
                    image="https://sanluispotosi.quadratin.com.mx/www/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-04-at-9.34.22-AM-775x465.jpeg"
                    alt="Placeholder image"
                  />
                  <CardContent>
                    <Typography variant="h6">San Luis Potosí</Typography>
                    <Typography variant="body2" color="text.secondary">
                      El volcán Etna vuelve a la actividad con un llamativo fenómeno
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
    </LayoutCMS>
  );
}

