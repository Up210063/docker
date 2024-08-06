package com.example.p02.controller;

import java.util.List;
import java.util.Optional;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RestController;

import com.example.p02.model.User;
import com.example.p02.service.UserService;

import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class UserController {
    private final UserService usuarioService;

    public UserController(@Autowired UserService usuarioService) {
        this.usuarioService = usuarioService;
    }
    
    @GetMapping({"/allUsers"})
    public ResponseEntity<List<User>> getAllUsers(){
        return ResponseEntity.ok(usuarioService.getAllUsers());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<User>> getUser(@PathVariable Long id){
        return ResponseEntity.ok(usuarioService.getUserbyId(id));
    }

    @PostMapping("/Usuario/")
    public User createUsuario(@RequestBody User usuario) {
        return this.usuarioService.saveUsuario(usuario);
    }

    @GetMapping("/comentarios")
        public List<Object[]> comentariosPorUsuario(){
         return usuarioService.comentariosPorUsuario();
        
    }
}

