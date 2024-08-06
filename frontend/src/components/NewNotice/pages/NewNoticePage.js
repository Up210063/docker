import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
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

export const NewNoticePage = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(dayjs());
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState(""); // Estado para la categoría seleccionada

  // Maneja la carga de archivos
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Convierte el archivo a base64 para mostrar la imagen
      };
      reader.readAsDataURL(file);
    }
  };

  // Maneja el arrastre y la caída de archivos
  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Maneja el evento de guardar
  const handleSave = () => {
    const newNotice = {
      title,
      date: date.format("YYYY-MM-DD"), // Formato de fecha
      author,
      url,
      content,
      image,
      category,
    };

    console.log("Guardando noticia:", newNotice);

    // Enviar los datos a la ruta especificada usando fetch
    fetch("http://localhost:3000/lista-noticias", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newNotice),
    })
      .then((response) => {
        if (response.ok) {
          alert("Noticia guardada exitosamente");
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

  // Resetea los campos del formulario
  const resetForm = () => {
    setTitle("");
    setDate(dayjs());
    setAuthor("");
    setUrl("");
    setContent("");
    setImage(null);
    setCategory(""); // Resetea la categoría
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
                    height: "350px", // Aumentamos la altura
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
                    height: "350px", // Aumentamos la altura
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
                      )} // Oculta el campo de entrada
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
                  rows={15} // Aumentamos el número de filas para el contenido
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
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      style={{ display: "block", marginTop: 10 }}
                    />
                    <div
                      onDrop={handleDrop}
                      onDragOver={(e) => e.preventDefault()}
                      style={{
                        border: "2px dashed #ccc",
                        borderRadius: "5px",
                        padding: "10px",
                        textAlign: "center",
                        marginTop: 10,
                      }}
                    >
                      Arrastra y suelta una imagen aquí
                    </div>
                    {image && (
                      <img
                        src={image}
                        alt="Preview"
                        style={{
                          marginTop: 10,
                          maxWidth: "100%",
                          height: "auto",
                        }}
                      />
                    )}
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
                  onClick={resetForm} // Resetear el formulario al cancelar
                >
                  Cancelar
                </Button>
                <Button variant="contained" color="primary" onClick={handleSave}>
                  Guardar
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
