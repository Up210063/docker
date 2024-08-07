import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { GridListNotices } from "../components/GridListNotices";
import { Header } from "../../common/components/Header";

export const ListNoticies = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const fetchNotices = async () => {
      console.log("Iniciando la solicitud fetch para obtener noticias...");

      try {
        const response = await fetch("http://localhost:8080/api/notices");
        console.log("Respuesta de la API recibida:", {
          status: response.status,
          statusText: response.statusText,
          type: response.type,
          url: response.url,
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Datos de noticias recibidos:", data);
          setNotices(data);
        } else {
          console.error("Error al obtener las noticias:", response.status, response.statusText);
        }
      } catch (error) {
        console.error("Error de red al obtener las noticias:", error);
      }
    };

    fetchNotices();
  }, []);

  return (
    <Container maxWidth="xl" sx={{ margin: "10px auto 20px" }}>
      <Header />
      <Container maxWidth="md" sx={{ margin: "50px auto" }}>
        <GridListNotices notices={notices} />
      </Container>
    </Container>
  );
};
