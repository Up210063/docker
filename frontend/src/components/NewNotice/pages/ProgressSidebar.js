import React from "react";
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

const ProgressSidebar = ({ title, date, author, url, content }) => {
  // Función para verificar si un campo está completo
  const isComplete = (field) => field.trim() !== "";

  return (
    <Paper elevation={3} style={{ padding: 20, height: "100%" }}>
      <Typography variant="h6" gutterBottom>
        Progreso
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            {isComplete(title) ? (
              <CheckCircleIcon color="success" />
            ) : (
              <RadioButtonUncheckedIcon />
            )}
          </ListItemIcon>
          <ListItemText primary="Paso 1: Título" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            {isComplete(date.format("YYYY-MM-DD")) ? (
              <CheckCircleIcon color="success" />
            ) : (
              <RadioButtonUncheckedIcon />
            )}
          </ListItemIcon>
          <ListItemText primary="Paso 2: Fecha" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            {isComplete(author) ? (
              <CheckCircleIcon color="success" />
            ) : (
              <RadioButtonUncheckedIcon />
            )}
          </ListItemIcon>
          <ListItemText primary="Paso 3: Autor" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            {isComplete(url) ? (
              <CheckCircleIcon color="success" />
            ) : (
              <RadioButtonUncheckedIcon />
            )}
          </ListItemIcon>
          <ListItemText primary="Paso 4: URL" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            {isComplete(content) ? (
              <CheckCircleIcon color="success" />
            ) : (
              <RadioButtonUncheckedIcon />
            )}
          </ListItemIcon>
          <ListItemText primary="Paso 5: Contenido" />
        </ListItem>
      </List>
    </Paper>
  );
};

export default ProgressSidebar;
