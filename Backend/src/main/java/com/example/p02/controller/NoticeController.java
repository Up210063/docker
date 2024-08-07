// NoticeController.java
package com.example.p02.controller;

import com.example.p02.dto.NoticeDTO;
import com.example.p02.service.NoticeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notices")
public class NoticeController {

    @Autowired
    private NoticeService noticeService;

    // Retrieve all notices
    @GetMapping
    public ResponseEntity<List<NoticeDTO>> getAllNotices() {
        List<NoticeDTO> notices = noticeService.getAllNotices();
        return ResponseEntity.ok(notices);
    }

    // Retrieve notices by category
    @GetMapping("/category/{category}")
    public ResponseEntity<List<NoticeDTO>> getNoticesByCategory(@PathVariable String category) {
        List<NoticeDTO> notices = noticeService.getNoticesByCategory(category);
        return ResponseEntity.ok(notices);
    }

    // Create a new notice
    @PostMapping("/create")
    public ResponseEntity<String> createNotice(@RequestBody NoticeDTO noticeDTO) {
        try {
            noticeService.saveNotice(noticeDTO);
            return ResponseEntity.ok("Noticia guardada exitosamente");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al guardar la noticia");
        }
    }

    // Delete a notice
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteNotice(@PathVariable Long id) {
        try {
            noticeService.deleteNotice(id);
            return ResponseEntity.ok("Noticia eliminada exitosamente");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al eliminar la noticia");
        }
    }

    // Update an existing notice
    @PutMapping("/{id}")
    public ResponseEntity<String> updateNotice(@PathVariable Long id, @RequestBody NoticeDTO noticeDTO) {
        try {
            noticeService.updateNotice(id, noticeDTO);
            return ResponseEntity.ok("Noticia actualizada exitosamente");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al actualizar la noticia");
        }
    }
}
