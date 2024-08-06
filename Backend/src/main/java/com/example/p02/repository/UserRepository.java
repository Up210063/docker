package com.example.p02.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.p02.model.User;

@Repository
public interface UserRepository extends JpaRepository<User,Long>{
    @Query(value = "SELECT u.nombre, c.contenido FROM comentario c join usuario u on c.id_usuario = u.id_usuario", nativeQuery = true)
    public List<Object[]> comentariosPorUsuario();
}