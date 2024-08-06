package com.example.p02.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name="usuario")
public class User {
    @Id
    @Column(name="id_usuario")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long idUsuario;

    private String nombre;

    private String email;

    private String contrasena;
   
}