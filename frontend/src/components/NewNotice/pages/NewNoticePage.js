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
} from "@mui/material";
import { LocalizationProvider, StaticDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import ProgressSidebar from "./ProgressSidebar";
import { Header } from "../../common/components/Header";
import { useNavigate, useLocation } from "react-router-dom";

export const NewNoticePage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(dayjs());
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    // Si hay datos de una noticia en el estado, cargarlos
    if (state?.notice) {
      const { title, date, author, img, content, category } = state.notice;
      setTitle(title);
      setDate(dayjs(date));
      setAuthor(author);
      setUrl(img);
      setContent(content);
      setCategory(category);
    }
  }, [state]);

  const handleSave = () => {
    const newNotice = {
      title,
      date: date.format("YYYY-MM-DD"),
      author,
      content,
      category,
      img: url,
    };

    console.log("Guardando noticia:", newNotice);

    // Decide si es una nueva noticia o una actualización
    const requestMethod = state?.notice ? "PUT" : "POST";
    const apiEndpoint = state?.notice
      ? `http://localhost:8080/api/notices/${state.notice.id}`
      : "http://localhost:8080/api/notices/create";

    // Enviar los datos a la ruta especificada usando fetch
    fetch(apiEndpoint, {
      method: requestMethod,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newNotice),
    })
      .then((response) => {
        if (response.ok) {
          alert("Noticia guardada exitosamente");
          navigate("/lista-noticias"); // Redirigir a la lista de noticias
        } else {
          alert("Error al guardar la noticia");
        }
      })
      .catch((error) => {
        console.error("Error al guardar la noticia:", error);
        alert("Error al guardar la noticia");
      });

    // Resetea el formulario después de guardar
    resetForm();
  };

  const resetForm = () => {
    setTitle("");
    setDate(dayjs());
    setAuthor("");
    setUrl("");
    setContent("");
    setCategory("");
  };

  return (
    <div>
      <Header />
      <Container>
        <Grid container spacing={2} style={{ marginTop: 20 }}>
          <Grid className={"new-notice-progress"} item xs={3}>
            <ProgressSidebar
              title={title}
              date={date}
              author={author}
              url={url}
              content={content}
            />
          </Grid>
          <Grid item xs={12} md={9} className="new-notice-container">
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
                        <TextField {...params} fullWidth sx={{ display: "none" }} />
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
                  rows={15}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  margin="normal"
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
                    <MenuItem value="Politica">Política</MenuItem>
                  </Select>
                </FormControl>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={handleSave}
                  style={{ marginTop: 20 }}
                >
                  Guardar Noticia
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
