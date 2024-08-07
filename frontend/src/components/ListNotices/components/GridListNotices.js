import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Box,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

export const GridListNotices = ({ notices, onDelete }) => {
  const navigate = useNavigate();

  const handleEditClick = (notice) => {
    navigate("/nueva-noticia", { state: { notice } }); // Navigate with state
  };

  return (
    <Box>
      {notices.map((notice) => (
        <Card key={notice.id} mb={5} className={"news-card"}>
          <CardMedia
            className={"news-card-image"}
            image={notice.img || "https://via.placeholder.com/150"}
            title={notice.title}
            component="img"
            height="200"
          />
          <CardActionArea>
            <CardContent className={"news-card-content"}>
              <Box
                mb={2}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Typography component="h5" variant="h5">
                  {notice.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {notice.author}
                </Typography>
              </Box>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                mb={1}
              >
                {notice.content}
              </Typography>
              <Typography variant="caption" color="textSecondary" component="p">
                Fecha de Publicación: {notice.date}
              </Typography>
              <Box
                mt={2}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"flex-end"}
              >
                <IconButton onClick={() => onDelete(notice.id)}>
                  <DeleteIcon />
                </IconButton>
                <IconButton onClick={() => handleEditClick(notice)}>
                  <EditIcon />
                </IconButton>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
};
