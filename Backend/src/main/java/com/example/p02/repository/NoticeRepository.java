package com.example.p02.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.p02.model.Notice;

public interface NoticeRepository extends JpaRepository<Notice,Long>{
    
}