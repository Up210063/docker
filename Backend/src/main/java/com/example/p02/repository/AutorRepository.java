package com.example.p02.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.p02.model.Autor;

public interface AutorRepository extends JpaRepository<Autor,Long>{
    
}