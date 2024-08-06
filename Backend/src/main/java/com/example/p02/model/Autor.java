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
@Table(name="autor")
public class Autor {
    @Id
    @Column(name="id_autor")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long idAutor;

    private String nombre;

    private String biografia;

    private LocalDate fechaRegistro;
    
}