// NoticeService.java
package com.example.p02.service;

import com.example.p02.dto.NoticeDTO;
import com.example.p02.mapper.NoticeMapper;
import com.example.p02.model.Notice;
import com.example.p02.repository.NoticeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class NoticeService {

    @Autowired
    private NoticeRepository noticeRepository;

    @Autowired
    private NoticeMapper noticeMapper;

    // Retrieve all notices
    public List<NoticeDTO> getAllNotices() {
        List<Notice> notices = noticeRepository.findAll();
        return notices.stream()
                .map(noticeMapper::toDto)
                .collect(Collectors.toList());
    }

    // Retrieve notices by category
    public List<NoticeDTO> getNoticesByCategory(String category) {
        List<Notice> notices = noticeRepository.findByCategory(category);
        return notices.stream()
                .map(noticeMapper::toDto)
                .collect(Collectors.toList());
    }

    // Save a new notice
    public void saveNotice(NoticeDTO noticeDTO) {
        Notice notice = noticeMapper.toEntity(noticeDTO);
        noticeRepository.save(notice);
    }

    // Delete a notice by ID
    public void deleteNotice(Long id) {
        noticeRepository.deleteById(id);
    }

    // Update an existing notice
    public void updateNotice(Long id, NoticeDTO noticeDTO) throws Exception {
        Optional<Notice> existingNoticeOpt = noticeRepository.findById(id);
        if (existingNoticeOpt.isPresent()) {
            Notice existingNotice = existingNoticeOpt.get();
            existingNotice.setTitle(noticeDTO.getTitle());
            existingNotice.setDate(noticeDTO.getDate());
            existingNotice.setContent(noticeDTO.getContent());
            existingNotice.setAuthor(noticeDTO.getAuthor());
            existingNotice.setCategory(noticeDTO.getCategory());
            existingNotice.setImg(noticeDTO.getImg());
            noticeRepository.save(existingNotice);
        } else {
            throw new Exception("Noticia no encontrada");
        }
    }
}
