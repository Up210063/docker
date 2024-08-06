package com.example.p02.dto;

import java.util.Date;

public class AutorDTO {
    private Long idAutor;
    private String nombre;
    private String biografia;
    private Date fechaRegistro;

    public AutorDTO() {}

    public AutorDTO(Long idAutor, String nombre, String biografia, Date fechaRegistro) {
        this.idAutor = idAutor;
        this.nombre = nombre;
        this.biografia = biografia;
        this.fechaRegistro = fechaRegistro;
    }

    public Long getIdAutor() {
        return idAutor;
    }

    public void setIdAutor(Long idAutor) {
        this.idAutor = idAutor;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getBiografia() {
        return biografia;
    }

    public void setBiografia(String biografia) {
        this.biografia = biografia;
    }

    public Date getFechaRegistro() {
        return fechaRegistro;
    }

    public void setFechaRegistro(Date fechaRegistro) {
        this.fechaRegistro = fechaRegistro;
    }
}
