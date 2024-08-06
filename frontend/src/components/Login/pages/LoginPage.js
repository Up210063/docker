import { useState } from 'react';
import { LayouLogin } from '../layout/LayoutLogin';
import { Box, Button, InputAdornment, TextField } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useForm } from '../../common/hooks/useForm';
import { useAuth } from '../../common/hooks/useAuth';
import { useNav } from '../../common/hooks/useNavigation';

export const LoginPage = () => {
  const [isPasswordShowed, setisPasswordShowed] = useState(false);
  const { email, password, formState, onInputChange } = useForm({
    email: '',
    password: ''
  });
  const { loginUser } = useAuth();
  const { goToPage } = useNav()

  const onLoginUser = (e) => {

    e.preventDefault();

    if ( !email || !password ) {
      alert('invalid credentials');
      return;
    }

    loginUser( formState );
    goToPage('/inicio')

  }

  return (
    <LayouLogin 
      title='Iniciar Sesión' 
      navPage='/registrar' 
      textPage='Crear Una' 
      outlineText='No tienes una cuenta?'
    >
      <Box onSubmit={ onLoginUser } component={'form'} mb={6} mt={3}>
        <Box display={'flex'} flexDirection={'column'} gap={2}>
        <TextField
            name="email"
            value={ email }
            onChange={ onInputChange }
            placeholder="Ingresa tu correo"
            fullWidth
            label="Correo"
            type="email"
          />

          <TextField
            name="password"
            value={ password }
            onChange={ onInputChange }
            fullWidth
            placeholder="Ingresa tu contraseña"
            label="Tu Contraseña"
            type={`${isPasswordShowed ? 'text' : 'password'}`}
            InputProps={{
              startAdornment: (
                <InputAdornment
                  onClick={() => setisPasswordShowed(!isPasswordShowed)}
                  sx={{ cursor: 'pointer' }}
                  position="start"
                >
                  {isPasswordShowed ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
                </InputAdornment>
              ),
            }}
          />
          <Button type="submit" variant="contained" sx={{ backgroundColor: '#000' }}>Ingresar a cuenta</Button>
        </Box>
      </Box>

    </LayouLogin>
  );
};
