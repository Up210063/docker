import React from 'react';
import { Typography, Grid, Card, CardContent, CardMedia, List, ListItem, ListItemText, Divider, Box } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { LayoutCMS } from '../../common/LayoutCMS';
import { SwiperCom } from '../../common/components/Swiper';
import Opiniones from '../../../components/common/components/Opiniones';

const hoverEffectStyles = {
  display: "flex",
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)', 
  },
};

export const InicioPage = () => {
  return (
    <LayoutCMS>
        <SwiperCom />
        <Grid container spacing={2}>

          <Grid item container spacing={2}>
            <Grid item xs={12} md={8} lg={9} sx={{ borderTop: "1px solid #ddd" }}>

              <List >
                <ListItem>
                  <ListItemText primary="Lorem ipsum dolor sit amet, consectetur adipiscing elit." secondary="12 hours ago" />
                  <RemoveRedEyeIcon />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText primary="Lorem ipsum dolor sit amet, consectetur adipiscing elit." secondary="12 hours ago" />
                  <RemoveRedEyeIcon />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText primary="Lorem ipsum dolor sit amet, consectetur adipiscing elit." secondary="12 hours ago" />
                  <RemoveRedEyeIcon />
                </ListItem>
              </List>

              <Grid 
                container 
                spacing={2} 
                alignItems="center" 
                marginTop={2}
                marginBottom={3}
                paddingTop={2} 
                paddingBottom={3} 
                sx={{ 
                  borderTop: "1px solid #ddd",
                  borderBottom: "1px solid #ddd",
                }}
              >
                <Grid item xs={12} sm={6}>
                  <Card className='inicio-card'>
                    <Box>
                      <img className='inicio-card-image' src="https://peopleenespanol.com/thmb/rj04toZFcG4q2akqqaYdaRsOa6g=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Juanes-a695de6676944fde874a997737f58864.png" alt="" />
                    </Box>
                    <Box className="inicio-content">
                      <Typography component={"h3"} variant='h6' fontWeight={"bolder"} mb={1}>Título de la noticia</Typography>
                        <Typography mb={1} variant="body2" color="text.secondary">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Typography>
                        <Typography textAlign={"right"} variant="body2" color="text.secondary">
                          12 hours ago
                      </Typography>
                    </Box>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Card className='inicio-card'>
                    <Box>
                      <img className='inicio-card-image' src="https://fundaciondelcorazon.com/images/stories/iStock-949190756.jpg" alt="" />
                    </Box>
                    <Box className="inicio-content">
                      <Typography component={"h3"} variant='h6' fontWeight={"bolder"} mb={1}>Título de la noticia</Typography>
                        <Typography mb={1} variant="body2" color="text.secondary">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Typography>
                        <Typography textAlign={"right"} variant="body2" color="text.secondary">
                          12 hours ago
                      </Typography>
                    </Box>
                  </Card>
                </Grid>
              </Grid>

              {/* Sección Lo Más Importante del Momento */}
              <Typography variant="h6" fontWeight={"bolder"} style={{ margin: "2rem 0", paddingBottom: "2rem" }}>🔥 Lo más importante del momento</Typography>

              <Grid container spacing={2}>

                <Grid item xs={12} sm={6}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} mb={2}>
                      <Card sx={hoverEffectStyles}>
                        <CardMedia
                          component="img"
                          image="https://www.shutterstock.com/image-photo/heat-thermometer-shows-temperature-hot-600nw-2472353719.jpg"
                          alt="Placeholder image"
                          style={{ objectFit: 'cover', flex: 1, height: "100px", width: "10px" }}
                        />
                        <CardContent sx={{ flex: 2, display: "grid", placeContent: "center" }}>
                          <Typography variant="body2" color="text.secondary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12}>
                      <Card sx={hoverEffectStyles}>
                        <CardMedia
                          component="img"
                          image="https://peopleenespanol.com/thmb/rj04toZFcG4q2akqqaYdaRsOa6g=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Juanes-a695de6676944fde874a997737f58864.png"
                          style={{ objectFit: 'cover', flex: 1, height: "100px", width: "10px" }}
                        />
                        <CardContent sx={{ flex: 2, display: "grid", placeContent: "center" }}>
                          <Typography variant="body2" color="text.secondary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={6} mb={5}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} mb={2}>
                      <Card sx={hoverEffectStyles}>
                        <CardMedia
                          component="img"
                          image="https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production%20Library/13-12-2023-WFP_Sudan.jpg/image1170x530cropped.jpg"
                          style={{ objectFit: 'cover', flex: 1, height: "100px", width: "10px" }}
                        />
                        <CardContent sx={{ flex: 2, display: "grid", placeContent: "center" }}>
                          <Typography variant="body2" color="text.secondary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12}>
                      <Card sx={hoverEffectStyles}>
                        <CardMedia
                          component="img"
                          image="https://www.puromarketing.com/uploads/img/contents/2023/kiYbDK4qFmjt29zc56C3/upload/20230720122846.webp?rand=20230720122846"
                          style={{ objectFit: 'cover', flex: 1, height: "100px", width: "10px" }}
                        />
                        <CardContent sx={{ flex: 2, display: "grid", placeContent: "center" }}>
                          <Typography variant="body2" color="text.secondary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>


              </Grid>
            </Grid>

            <Grid item xs={12} md={4} lg={3}>
              <Box sx={hoverEffectStyles}>
                <Typography variant="h6">Opiniones</Typography>
                <Opiniones />
              </Box>
            </Grid>
          </Grid>
        </Grid>
    </LayoutCMS>
  );
};
