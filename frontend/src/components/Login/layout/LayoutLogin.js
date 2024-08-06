import {
  Box,
  Button,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import backgroundLogin from '../../../assets/img/background.png';

export const LayouLogin = ({ 
  children, 
  title = 'Título de la página', 
  navPage = '', 
  textPage = '', 
  buttonText="",
  outlineText = ""
}) => {
  return (
    <Grid
      container
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      sx={{ 
        backgroundRepeat: "no-repeat",
        backgroundSize: 'container',
        backgroundColor: '#6aa9e9', 
        backgroundImage: `url(${backgroundLogin})`}}
      height={'100vh'}
    >
      <Grid
        height={'100%'}
        width={'90%'}
        display={'flex'}
        flexDirection={'column'}
        alignContent={'center'}
        justifyContent={'center'}
        xs={12}
        md={4}
      >
        <Typography 
          textAlign={'center'} 
          sx={{ 
            textTransform: 'uppercase', 
            letterSpacing: '5px', 
            fontWeight: '900', 
            color: '#fff'
          }} 
          component="h1" 
          variant="h4" 
          pb={1} 
          mb={2}
        >CMS Noticias</Typography>
        <Grid
          sx={{ backgroundColor: '#fff' }}
          borderRadius={'5px'}
          boxShadow={'initial'}
          p={4}
        >
          <Typography sx={{ textTransform: 'uppercase', fontSize: '18px', letterSpacing: '2px', fontWeight: '500'}} component="h2" pb={1}>
            { title }
          </Typography>
          <Divider />

          { children } 

          <Box display={'flex'} justifyContent={'space-between'} alignContent={'center'} mt={3}>
            <Typography component={'p'}>{ outlineText }</Typography>
            <Link to={ navPage } style={{ color: 'inherit', textDecoration: 'none'}}>
                <Typography sx={{ paddingBottom:'1px', borderBottom: '1px solid currentColor'}}>{textPage}</Typography>
            </Link>
          </Box>

        </Grid>
        <Link to={"/inicio"} style={{ textDecoration: "none" }}>
          <Typography mt={2} textAlign={"right"} color={"#fff"}>Ver todas las noticias</Typography>
        </Link>
      </Grid>
    </Grid>
  );
};
