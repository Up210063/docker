// NoticeRepository.java
package com.example.p02.repository;

import com.example.p02.model.Notice;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NoticeRepository extends JpaRepository<Notice, Long> {
    // Puedes agregar métodos de consulta personalizados aquí si es necesario
}
