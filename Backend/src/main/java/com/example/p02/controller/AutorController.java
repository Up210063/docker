package com.example.p02.controller;

import java.util.List;
import java.util.Optional;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RestController;

import com.example.p02.model.Autor;
import com.example.p02.model.Notice;
import com.example.p02.service.AutorService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
public class AutorController {
    private final AutorService autorService;

    public AutorController(@Autowired AutorService autorService) {
        this.autorService = autorService;
    }
    
    @GetMapping({"/allAutores"})
    public ResponseEntity<List<Autor>> getClientes(){
        return ResponseEntity.ok(autorService.getAutors());
    }

    @GetMapping("/Autor/{id}")
    public ResponseEntity<Optional<Autor>> getAutor(@PathVariable Long id){
        return ResponseEntity.ok(autorService.getAutor(id));
    }   

    @PostMapping("/Autor/")
    public Autor createNoticia(@RequestBody Autor autor) {
        return this.autorService.saveAutor(autor);
    }
}