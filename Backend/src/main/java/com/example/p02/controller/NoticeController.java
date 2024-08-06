package com.example.p02.controller;

import java.util.List;
import java.util.Optional;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RestController;

import com.example.p02.model.Notice;
import com.example.p02.model.User;
import com.example.p02.service.NoticeService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
public class NoticeController {
    private final NoticeService noticiaService;

    public NoticeController(@Autowired NoticeService noticiaService) {
        this.noticiaService = noticiaService;
    }
    

    @GetMapping({"/allNotices"})
    public ResponseEntity<List<Notice>> getNoticias(){
        return ResponseEntity.ok(noticiaService.getNoticias());
    }

    @GetMapping("/Noticia/{id}")
    public ResponseEntity<Optional<Notice>> getNoticia(@PathVariable Long id){
        return ResponseEntity.ok(noticiaService.getNoticia(id));
    }   

    @PostMapping("/Noticia/")
    public Notice createNoticia(@RequestBody Notice noticia) {
        return this.noticiaService.saveNoticia(noticia);
    }

}