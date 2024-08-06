package com.example.p02.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import java.time.*;

@Data
@Entity
@Table(name="noticia")
public class Notice {
    @Id
    @Column(name="id_noticia")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long idNoticia;

    private String titulo;

    private String contenido;

    private String resumen;

    private LocalDate fechaPublicacion;

    private String url;

    private Long idAutor;
   
}