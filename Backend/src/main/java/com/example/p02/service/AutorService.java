package com.example.p02.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.p02.model.Autor;
import com.example.p02.model.Notice;
import com.example.p02.repository.AutorRepository;

@Service
public class AutorService {
    private final AutorRepository autorRepository;

    @Autowired
    public AutorService(AutorRepository autorRepository) {
        this.autorRepository = autorRepository;
    }

    public List<Autor> getAutors(){
        return autorRepository.findAll();
    }
    
    public Optional<Autor>getAutor(Long id){
        return autorRepository.findById(id);
    }
    
    public Autor saveAutor(Autor autor) {
        return autorRepository.save(autor);
    }

    public void eliminar(Long id){
        autorRepository.deleteById(id);
    }
}