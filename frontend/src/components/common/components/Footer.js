import { Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from "react-router-dom";

const footer = {
  display:"flex", justifyContent: "center", alignItems: "center", textAlign: 'center', padding: '2rem 0', marginTop: "1rem", borderTop: "1px solid #aaa", 
}

export const Footer = () => {
  return (
    <footer style={ footer }>
      <Typography mr={1} variant="body2" color="text.secondary">
        © 2024 CMS UPA
      </Typography>
      <Link target="_blank" to={"https://www.instagram.com/upolitecnicaags"} style={{ color: "rgba(0, 0, 0, .5)", marginBottom: "0"}}>
        <InstagramIcon />
      </Link>
    </footer>
  );
};
