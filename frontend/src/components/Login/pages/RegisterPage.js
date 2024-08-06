import { Box, Button, InputAdornment, TextField } from '@mui/material';
import { LayouLogin } from '../layout/LayoutLogin';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useForm } from '../../common/hooks/useForm';
import { useState } from 'react';

export const RegisterPage = () => {
  const [isPasswordShowed, setIsPasswordShowed] = useState(false);
  const { firstName, email, password, onInputChange, formState } = useForm({
    firstName: "",
    email: "",
    password: ""
  });

  const onRegisterUser = ( e ) => {
    e.preventDefault();

    if ( !firstName || !email || !password ) {
      alert('ingrese los datos');
      return;
    }

  }

  return (
    <LayouLogin
      title="Registra una cuenta"
      navPage="/"
      textPage="Ingresa"
      buttonText="Crear una cuenta"
      outlineText="Ya tienes una cuenta?"
    >
      <Box onSubmit={onRegisterUser} component={'form'} mb={6} mt={3}>
        <Box display={'flex'} flexDirection={'column'} gap={2}>
          <TextField 
            name='firstName'
            value={ firstName }
            onChange={ onInputChange }
            placeholder="Ingresa tu nombre"
            fullWidth
            label="Nombre"
            type="text"
          />
          <TextField
            name='email'
            value={ email }
            onChange={ onInputChange }
            placeholder="Registra un correo"
            fullWidth
            label="Ingresa un correo electrónico"
            type="email"
          />
          <TextField
            name='password'
            value={ password }
            onChange={ onInputChange }
            fullWidth
            placeholder="Crea una contraseña de 8 caracteres"
            label="Ingresa una contraseña"
            type={`${isPasswordShowed ? 'text' : 'password'}`}
            InputProps={{
              startAdornment: (
                <InputAdornment
                  onClick={() => setIsPasswordShowed(!isPasswordShowed)}
                  sx={{ cursor: 'pointer' }}
                  position="start"
                >
                  {isPasswordShowed ? (
                    <RemoveRedEyeIcon />
                  ) : (
                    <VisibilityOffIcon />
                  )}
                </InputAdornment>
              ),
            }}
          />
          <Button type="submit" variant="contained" sx={{ backgroundColor: '#000' }}>Crear cuenta</Button>
        </Box>
      </Box>
    </LayouLogin>
  );
};
