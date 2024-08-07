import React, { useState, useEffect } from "react";
import {
  Typography,
  Container,
  Grid,
  TextField,
  Button,
  Box,
  Paper,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@mui/material";
import { LocalizationProvider, StaticDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useNavigate, useLocation } from "react-router-dom";

// Sidebar Component
const Sidebar = ({ fields }) => (
  <Paper
    elevation={3}
    sx={{
      height: "100%",
      padding: 2,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    }}
  >
    <Typography variant="h6" mb={2}>
      Completeness Check
    </Typography>
    <List>
      {fields.map(({ label, isComplete }) => (
        <React.Fragment key={label}>
          <ListItem>
            <ListItemIcon>
              <Checkbox checked={isComplete} disableRipple />
            </ListItemIcon>
            <ListItemText primary={label} />
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  </Paper>
);

export const NewNoticePage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [noticeId, setNoticeId] = useState(null); // Store the ID of the notice if editing
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(dayjs());
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    // If editing, pre-fill the form with the existing notice data
    if (location.state && location.state.notice) {
      const notice = location.state.notice;
      setNoticeId(notice.id); // Capture the notice ID for editing
      setTitle(notice.title);
      setDate(dayjs(notice.date));
      setAuthor(notice.author);
      setUrl(notice.img);
      setContent(notice.content);
      setCategory(notice.category);
    }
  }, [location.state]);

  // Handle save for both creating and editing
const handleSave = async () => {
  const newNotice = {
    title,
    date: date.format("YYYY-MM-DD"),
    author,
    content,
    category,
    img: url, // Use the correct key for the image URL
  };

  try {
    let response;
    if (noticeId) {
      // Edit existing notice
      response = await fetch(`http://localhost:8080/api/notices/${noticeId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newNotice),
      });
    } else {
      // Create new notice
      response = await fetch("http://localhost:8080/api/notices/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newNotice),
      });
    }

    if (response.ok) {
      alert(
        noticeId
          ? "Noticia actualizada exitosamente"
          : "Noticia guardada exitosamente"
      );
      navigate("/lista-noticias");
    } else {
      const errorMessage = await response.text();
      alert(`Error al guardar la noticia: ${errorMessage}`);
    }
  } catch (error) {
    console.error("Error al guardar la noticia:", error);
    alert("Error de red al guardar la noticia");
  }
};


  // Reset form fields
  const resetForm = () => {
    setTitle("");
    setDate(dayjs());
    setAuthor("");
    setUrl("");
    setContent("");
    setCategory("");
    setNoticeId(null); // Reset notice ID
  };

  const fields = [
    { label: "Título", isComplete: !!title },
    { label: "Fecha", isComplete: !!date },
    { label: "Autor", isComplete: !!author },
    { label: "Contenido", isComplete: !!content },
    { label: "URL Imagen", isComplete: !!url },
    { label: "Categoría", isComplete: !!category },
  ];

  return (
    <div>
      <Container>
        <Grid container spacing={2} style={{ marginTop: 20 }}>
          <Grid item xs={12} md={3}>
            {/* Sidebar */}
            <Sidebar fields={fields} />
          </Grid>
          <Grid item xs={12} md={9}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Paper
                  elevation={3}
                  style={{
                    padding: 20,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "350px",
                  }}
                >
                  <Typography variant="h6">Título</Typography>
                  <TextField
                    fullWidth
                    multiline
                    rows={10}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    margin="normal"
                    sx={{ flexGrow: 1 }}
                  />
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper
                  elevation={4}
                  style={{
                    padding: 20,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "350px",
                  }}
                >
                  <Typography variant="h6">Fecha</Typography>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <StaticDatePicker
                      displayStaticWrapperAs="desktop"
                      openTo="day"
                      value={date}
                      onChange={(newValue) => setDate(newValue)}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          fullWidth
                          sx={{ display: "none" }}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </Paper>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Paper elevation={3} style={{ padding: 20, marginTop: 20 }}>
                <Typography variant="h6">Contenido, Autor y URL</Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={10} // Adjust rows to fit more content if needed
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  margin="normal"
                  sx={{
                    '& .MuiInputBase-root': {
                      minHeight: '150px', // Ensures minimum height for text area
                    },
                    overflow: 'auto',
                  }}
                />
                <Box container spacing={2} className="new-notice-form">
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="Autor"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="URL Imagen"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      margin="normal"
                    />
                  </Grid>
                </Box>
                <FormControl fullWidth margin="normal" sx={{ marginTop: 2 }}>
                  <InputLabel>Categoría</InputLabel>
                  <Select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <MenuItem value="Deportes">Deportes</MenuItem>
                    <MenuItem value="Clima">Clima</MenuItem>
                    <MenuItem value="Entretenimiento">Entretenimiento</MenuItem>
                    <MenuItem value="Política">Política</MenuItem>
                  </Select>
                </FormControl>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="flex-end" mt={2}>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ marginRight: 2 }}
                  onClick={resetForm}
                >
                  Cancelar
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSave}
                >
                  {noticeId ? "Actualizar" : "Guardar"}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
