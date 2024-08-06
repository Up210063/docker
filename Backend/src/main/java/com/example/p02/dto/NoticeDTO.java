package com.example.p02.dto;

import java.util.Date;

public class NoticeDTO {
    private Long idNoticia;
    private String titulo;
    private String contenido;
    private String resumen;
    private Date fechaPublicacion;
    private String url;
    private Long idAutor;

    public NoticeDTO() {}

    public NoticeDTO(Long idNoticia, String titulo, String contenido, String resumen, Date fechaPublicacion, String url, Long idAutor) {
        this.idNoticia = idNoticia;
        this.titulo = titulo;
        this.contenido = contenido;
        this.resumen = resumen;
        this.fechaPublicacion = fechaPublicacion;
        this.url = url;
        this.idAutor = idAutor;
    }

    public Long getIdNoticia() {
        return idNoticia;
    }

    public void setIdNoticia(Long idNoticia) {
        this.idNoticia = idNoticia;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getContenido() {
        return contenido;
    }

    public void setContenido(String contenido) {
        this.contenido = contenido;
    }

    public String getResumen() {
        return resumen;
    }

    public void setResumen(String resumen) {
        this.resumen = resumen;
    }

    public Date getFechaPublicacion() {
        return fechaPublicacion;
    }

    public void setFechaPublicacion(Date fechaPublicacion) {
        this.fechaPublicacion = fechaPublicacion;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public Long getIdAutor() {
        return idAutor;
    }

    public void setIdAutor(Long idAutor) {
        this.idAutor = idAutor;
    }
}
