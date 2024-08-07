// NoticeDTO.java
package com.example.p02.dto;

import lombok.Data;

@Data
public class NoticeDTO {
    private Long id;
    private String title;
    private String date; // Asegúrate de devolver la fecha como String o LocalDate
    private String content;
    private String author;
    private String category;
    private String img; // Incluye el campo de imagen en el DTO
}
