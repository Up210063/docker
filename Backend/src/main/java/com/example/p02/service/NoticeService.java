package com.example.p02.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.p02.model.Notice;
import com.example.p02.model.User;
import com.example.p02.repository.NoticeRepository;

@Service
public class NoticeService {
    private final NoticeRepository noticiaRepository;

    @Autowired
    public NoticeService(NoticeRepository noticiaRepository) {
        this.noticiaRepository = noticiaRepository;
    }

    public List<Notice> getNoticias(){
        return noticiaRepository.findAll();
    }
    
    public Optional<Notice>getNoticia(Long id){
        return noticiaRepository.findById(id);
    }

    public Notice saveNoticia(Notice noticia) {
        return noticiaRepository.save(noticia);
    }
    
    public void eliminar(Long id){
        noticiaRepository.deleteById(id);
    }
}