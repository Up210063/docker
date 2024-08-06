import { Link } from "react-router-dom"
import { Box, Button, ListItem, Stack, Typography } from "@mui/material"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { dateFormat } from "../../common/helpers/dateFormat";
import { useUI } from "../../common/hooks/useUI";

export const HeaderListNotices = () => {

    const { openAsideMenu } = useUI()

  return (
    <Stack direction="row" alignItems={"center"} justifyContent={"center"} spacing={2} mb={5}>
        <ListItem sx={{ display: "flex", flexDirection: "column"}}>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-start", gap: "30px", marginBottom: "10px"}}>
            <MenuOutlinedIcon sx={{ cursor: "pointer"}} onClick={ openAsideMenu } />
            <SearchOutlinedIcon />
        </Box>
        <Box width={"100%"}>
            <Typography component={"p"} variant='body2' fontWeight={700}>{ dateFormat() }</Typography>
            <Typography component={"p"} variant='caption'>Today's Paper</Typography>
        </Box>
        </ListItem>
        <Box width={"100%"}>
        <Typography component={"h1"} variant='h4' fontWeight={900} textAlign={"center"}>CMS Noticias</Typography>
        </Box>
        <Box sx={{ width: "100%", display: "flex", flexDirection: "row", gap: "20px", justifyContent: "flex-end"}}>
            <Box width={"fit-content"} component="div" sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                <Typography mb={1} className="photo-circle" variant="h6">D</Typography>
                <Link to="/nueva-noticia">
                    <Button variant="contained">Agregar Noticia</Button>
                </Link>
            </Box>
        </Box>
    </Stack>
  )
}
