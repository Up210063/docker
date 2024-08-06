import { Box, Button, Container, ListItem, Stack, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'

export const Navigation = () => {
  return (
    <Container className='navigation' sx={{ marginBottom: "20px"}} maxWidth="xl">
      <Stack sx={{ border: "1px solid #1874d0", borderRadius: "10px"}} direction="row" alignItems={"center"} width={"100%"}>
        <Box width={"100%"}>
          <NavLink className={({ isActive }) => `${isActive ? 'nav-active': 'nav'}` } to={"/inicio"} style={{ padding: "10px", display: "block", textAlign: "center", textDecoration: "none"}}>Inicio</NavLink>
        </Box>
        <Box width={"100%"}>
          <NavLink className={({ isActive }) => `${isActive ? 'nav-active': 'nav'}` } to={"/tendencias"} style={{ padding: "10px", display: "block", textAlign: "center", textDecoration: "none"}}>Tendencias</NavLink>
        </Box>
        <Box width={"100%"}>
          <NavLink className={({ isActive }) => `${isActive ? 'nav-active': 'nav'}` } to={"/deportes"} style={{ padding: "10px", display: "block", textAlign: "center", textDecoration: "none"}}>Deportes</NavLink>
        </Box>
        <Box width={"100%"}>
          <NavLink className={({ isActive }) => `${isActive ? 'nav-active': 'nav'}` } to={"/entretenimiento"} style={{ padding: "10px", display: "block", textAlign: "center", textDecoration: "none"}}>Entretenimiento</NavLink>
        </Box>
        <Box width={"100%"}>
          <NavLink className={({ isActive }) => `${isActive ? 'nav-active': 'nav'}` } to={"/politica"} style={{ padding: "10px", display: "block", textAlign: "center", textDecoration: "none"}}>Política</NavLink>
        </Box>
        <Box width={"100%"}>
          <NavLink className={({ isActive }) => `${isActive ? 'nav-active': 'nav'}` } to={"/clima"} style={{ padding: "10px", display: "block", textAlign: "center", textDecoration: "none"}}>Clima</NavLink>
        </Box>
      </Stack>
    </Container>
  )
}
