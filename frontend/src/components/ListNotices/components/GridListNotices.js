import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Box,
  IconButton,
  Grid,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

export const GridListNotices = ({ notices }) => {
  const navigate = useNavigate();

  // Handler to delete a notice
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/notices/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Noticia eliminada exitosamente");
        window.location.reload(); // Refresh the page to update the list
      } else {
        const errorMessage = await response.text(); // Read the error message from the response
        alert(`Error al eliminar la noticia: ${errorMessage}`);
      }
    } catch (error) {
      console.error("Error al eliminar la noticia:", error);
      alert("Error de red al eliminar la noticia");
    }
  };

  // Handler to edit a notice
  const handleEdit = (notice) => {
    navigate("/nueva-noticia", { state: { notice } });
  };

  // Function to truncate content to a specified number of words
  const truncateContent = (content, maxWords) => {
    const words = content.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
    return content;
  };

  return (
    <Box>
      {notices.map((notice) => (
        <Card key={notice.id} className="news-card" sx={{ marginBottom: 2, display: "flex" }}>
          <CardMedia
            className="news-card-image"
            image={notice.img || "https://via.placeholder.com/150"}
            title={notice.title}
            component="img"
            sx={{ width: 200 }}
          />
          <CardActionArea sx={{ flex: 1 }}>
            <CardContent className="news-card-content" sx={{ display: "flex", alignItems: "center" }}>
              <Grid container spacing={2}>
                <Grid item xs={10}>
                  <Box mb={2}>
                    <Typography component="h5" variant="h5">
                      {notice.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="textSecondary" component="p" mb={1}>
                    <strong>Autor:</strong> {notice.author}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" mb={1}>
                    <strong>Categoría:</strong> {notice.category}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" mb={1}>
                    <strong>Contenido:</strong> {truncateContent(notice.content, 20)}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" mb={1}>
                    <strong>Fecha de Publicación:</strong> {notice.date}
                  </Typography>
                </Grid>
                <Grid item xs={2} container alignItems="center" justifyContent="flex-end">
                  <IconButton onClick={() => handleDelete(notice.id)} sx={{ color: "red" }}>
                    <DeleteIcon />
                  </IconButton>
                  <IconButton onClick={() => handleEdit(notice)} sx={{ color: "blue" }}>
                    <EditIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
};
