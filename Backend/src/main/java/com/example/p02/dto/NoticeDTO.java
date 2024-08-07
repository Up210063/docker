// NoticeDTO.java
package com.example.p02.dto;

import lombok.Data;

@Data
public class NoticeDTO {
    private Long id;
    private String title;
    private String date; // Ensure this matches the type you're using, e.g., String or LocalDate
    private String content;
    private String author;
    private String category;
    private String img; // Ensure this is included in the DTO
}
