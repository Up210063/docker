package com.example.p02.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import com.example.p02.model.User;
import com.example.p02.repository.UserRepository;

@Service
public class UserService {
    private final UserRepository usuarioRepository;

    @Autowired
    public UserService(UserRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }
 
    public List<User> getAllUsers(){
        return usuarioRepository.findAll();
    }
    
    public Optional<User>getUserbyId(Long id){
        return usuarioRepository.findById(id);
    }
    
    public User saveUsuario(User usuario) {
        return usuarioRepository.save(usuario);
    }

    public void deleteUser(Long id){
        usuarioRepository.deleteById(id);
    }
    
    public List<Object[]> comentariosPorUsuario(){
        return usuarioRepository.comentariosPorUsuario();
    }

    
}
