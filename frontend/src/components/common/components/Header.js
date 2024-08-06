import {
  Box,
  Stack,
  Button,
  ListItem,
  Container,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { dateFormat } from '../helpers/dateFormat';
import { useUI } from '../hooks/useUI';
import { useAuth } from '../hooks/useAuth';

export const Header = () => {
  const { openAsideMenu } = useUI();
  const { status, user: { email } } = useAuth();

  return (
    <Container maxWidth="xl" sx={{ margin: '10px auto 20px' }}>
      <Box className="header">
        <Box className="header-info">
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-start',
              gap: '30px',
              marginBottom: '10px',
            }}
          >
            <MenuOutlinedIcon
              sx={{ cursor: 'pointer' }}
              onClick={openAsideMenu}
            />
            <SearchOutlinedIcon />
          </Box>
          <Box width={'100%'}>
            <Typography component={'p'} variant="body2" fontWeight={700}>
              {dateFormat()}
            </Typography>
            <Typography component={'p'} variant="caption">
              Today's Paper
            </Typography>
          </Box>
        </Box>
        <Box className="header-name" width={'100%'}>
          <h1 className="header-title">CMS Noticias</h1>
          <Box className="header-buttons-2">
            {
              status === 'authorized'
              ? (
                <>
                <Typography mb={1} className="photo-circle" variant="h6">
                  { email[0].toUpperCase() }
                </Typography>
                </>
              )
              : (
                <>
                  <Link to="/registrar">Ingresar</Link>
                  <Link to="/">Log In</Link>
                </>
              )
            }
          </Box>
        </Box>
        {status === 'authorized' ? (
          <Box
            className="header-buttons"
          >
            <Box
              width={'400px'}
              component="div"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
              }}
            >
              <Typography mb={1} className="photo-circle" variant="h6">
              { email[0].toUpperCase() }
              </Typography>
              <Box display={"flex"}>
                <Link to="/nueva-noticia">
                  <Button variant="contained">Agregar Noticia</Button>
                </Link>
                <Link to="/lista-noticias">
                  <Button variant="contained">Noticias</Button>
                </Link>
              </Box>
            </Box>
          </Box>
        ) : (
          <Box className="header-buttons">
            <Link to="/registrar">
              <Button variant="contained">Subscribete</Button>
            </Link>
            <Link to="/">
              <Button variant="contained">Log In</Button>
            </Link>
          </Box>
        )}
      </Box>
    </Container>
  );
};
