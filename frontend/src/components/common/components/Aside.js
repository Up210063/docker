import { useEffect, useRef, useState } from "react"
import { Box, IconButton, ListItem, Stack, Typography, List } from "@mui/material"
import { useUI } from "../hooks/useUI"
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import AirlineStopsIcon from '@mui/icons-material/AirlineStops';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import ConnectedTvIcon from '@mui/icons-material/ConnectedTv';
import PolicyIcon from '@mui/icons-material/Policy';
import AirIcon from '@mui/icons-material/Air';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AddIcon from '@mui/icons-material/Add';
import { useNav } from "../hooks/useNavigation";
import { useAuth } from "../hooks/useAuth";

export const Aside = () => {

  const [selectedPage, setSelectedPage] = useState("");
  const { asideMenu: { isOpen }, closeAsideMenu } = useUI();
  const { goToPage } = useNav();
  const asideRef = useRef();
  const { status, logoutUser } = useAuth();

  useEffect(() => {
    if ( isOpen ) {
      asideRef.current.classList.remove("aside-hidden");
      asideRef.current.classList.add("aside-show");
      document.querySelector(".cms").style.opacity = 0.5;
    } else {
      asideRef.current.classList.remove("aside-show");
      asideRef.current.classList.add("aside-hidden");
      document.querySelector(".cms").style.opacity = 1;
    }
  }, [isOpen])

  useEffect(() => {
    if ( selectedPage !== "" ) {
      goToPage( selectedPage );
      closeAsideMenu();
    }
  }, [ selectedPage ])

  return (
    <Box ref={asideRef} component="aside" className="aside aside-hidden">
      <Box width={"100%"} component="div">
        <Stack sx={{ borderBottom: "1px solid #ddd"}} mb={3} width={"100%"} flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"}>
          <ListItem sx={{ flex: "1" }}>
            <Typography variant="body2" textTransform={"uppercase"} letterSpacing={"1px"} fontWeight={"bold"}>Navegación</Typography>
          </ListItem>
          <ListItem sx={{ justifyContent: "flex-end" }}>
            <IconButton>
              <CloseIcon onClick={ closeAsideMenu } />
            </IconButton>
          </ListItem>
        </Stack>

        <List>
          <ListItem>
            <Box 
              onClick={ () => setSelectedPage("/inicio")} 
              sx={{ display: "flex", justifyContent: "space-between", width: "100%", marginBottom: "20px", cursor: "pointer" }}>
              <Typography>Inicio</Typography>
              <HomeIcon />
            </Box>            
          </ListItem>
          <ListItem>
            <Box onClick={ () => setSelectedPage("/tendencias")} sx={{ display: "flex", justifyContent: "space-between", width: "100%", marginBottom: "20px", cursor: "pointer" }}>
              <Typography>Tendencias</Typography>
              <AirlineStopsIcon />
            </Box>            
          </ListItem>
          <ListItem>
            <Box onClick={ () => setSelectedPage("/deportes")} sx={{ display: "flex", justifyContent: "space-between", width: "100%", marginBottom: "20px", cursor: "pointer"}}>
              <Typography>Deportes</Typography>
              <SportsBaseballIcon />
            </Box>            
          </ListItem>
          <ListItem>
            <Box onClick={ () => setSelectedPage("/entretenimiento")} sx={{ display: "flex", justifyContent: "space-between", width: "100%", marginBottom: "20px",cursor: "pointer"}}>
              <Typography>Entretenimiento</Typography>
              <ConnectedTvIcon />
            </Box>            
          </ListItem>
          <ListItem>
            <Box onClick={ () => setSelectedPage("/politica")} sx={{ display: "flex", justifyContent: "space-between", width: "100%", marginBottom: "20px",cursor: "pointer"}}>
              <Typography>Politica</Typography>
              <PolicyIcon />
            </Box>            
          </ListItem>
          <ListItem>
            <Box onClick={ () => setSelectedPage("/clima")} sx={{ display: "flex", justifyContent: "space-between", width: "100%", marginBottom: "20px",cursor: "pointer"}}>
              <Typography>Clima</Typography>
              <AirIcon />
            </Box>            
          </ListItem>
          {
            status === "authorized"
            && (
              <>
                <ListItem>
                  <Box onClick={ () => setSelectedPage("/lista-noticias")} sx={{ display: "flex", justifyContent: "center", width: "100%", marginBottom: "20px",cursor: "pointer", backgroundColor: "#1874d0", padding:"10px", borderRadius: "8px" }}>
                    <Typography color="#fff" textAlign={"center"}>Noticias Creadas</Typography>
                  </Box>            
                </ListItem>
                <ListItem>
                  <Box onClick={ () => setSelectedPage("/nueva-noticia")} sx={{ display: "flex", justifyContent: "center", width: "100%", marginBottom: "20px",cursor: "pointer", backgroundColor: "#1874d0", padding:"10px", borderRadius: "8px" }}>
                    <Typography color="#fff" textAlign={"center"}>Nueva Noticia</Typography>
                  </Box>            
                </ListItem>
                <ListItem>
                  <Box onClick={ () => {
                    logoutUser();
                    setSelectedPage("/")
                  }} sx={{ display: "flex", justifyContent: "center", width: "100%", marginBottom: "20px",cursor: "pointer", backgroundColor: "#1874d0", padding:"10px", borderRadius: "8px" }}>
                    <Typography color="#fff" textAlign={"center"}>Salir</Typography>
                  </Box>            
                </ListItem>
            </>
            )
          }
        </List>

      </Box>
    </Box>
  )
}
