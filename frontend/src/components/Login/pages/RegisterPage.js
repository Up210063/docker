import { Box, Button, InputAdornment, TextField } from '@mui/material';
import { LayouLogin } from '../layout/LayoutLogin';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useForm } from '../../common/hooks/useForm';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate

export const RegisterPage = () => {
  const [isPasswordShowed, setIsPasswordShowed] = useState(false);
  const { firstName, email, password, onInputChange } = useForm({
    firstName: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate(); // Inicializar useNavigate

  const onRegisterUser = async (e) => {
    e.preventDefault();

    if (!firstName || !email || !password) {
      alert('Por favor, ingresa todos los datos.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/users/register', {
        firstName,
        email,
        password
      });

      if (response.status === 200) {
        alert('Usuario registrado con éxito');
        navigate('/'); // Redirigir a la página principal
      }
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
      if (error.response && error.response.status === 400) {
        alert(error.response.data);
      } else {
        alert('Hubo un error al registrar el usuario');
      }
    }
  }

  return (
    <LayouLogin
      title="Registra una cuenta"
      navPage="/"
      textPage="Ingresa"
      buttonText="Crear una cuenta"
      outlineText="¿Ya tienes una cuenta?"
    >
      <Box onSubmit={onRegisterUser} component={'form'} mb={6} mt={3}>
        <Box display={'flex'} flexDirection={'column'} gap={2}>
          <TextField 
            name='firstName'
            value={firstName}
            onChange={onInputChange}
            placeholder="Ingresa tu nombre"
            fullWidth
            label="Nombre"
            type="text"
          />
          <TextField
            name='email'
            value={email}
            onChange={onInputChange}
            placeholder="Registra un correo"
            fullWidth
            label="Ingresa un correo electrónico"
            type="email"
          />
          <TextField
            name='password'
            value={password}
            onChange={onInputChange}
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
