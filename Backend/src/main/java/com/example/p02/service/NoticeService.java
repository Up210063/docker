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

    public List<NoticeDTO> getAllNotices() {
        List<Notice> notices = noticeRepository.findAll();
        return notices.stream()
                .map(noticeMapper::toDto)
                .collect(Collectors.toList());
    }

    public List<NoticeDTO> getNoticesByCategory(String category) {
        List<Notice> notices = noticeRepository.findByCategory(category);
        return notices.stream()
                .map(noticeMapper::toDto)
                .collect(Collectors.toList());
    }

    public void saveNotice(NoticeDTO noticeDTO) {
        Notice notice = noticeMapper.toEntity(noticeDTO);
        noticeRepository.save(notice);
    }

    // Método para actualizar una noticia existente
    public NoticeDTO updateNotice(Long id, NoticeDTO noticeDTO) throws Exception {
        Optional<Notice> optionalNotice = noticeRepository.findById(id);

        if (optionalNotice.isPresent()) {
            Notice notice = optionalNotice.get();
            notice.setTitle(noticeDTO.getTitle());
            notice.setDate(noticeDTO.getDate());
            notice.setContent(noticeDTO.getContent());
            notice.setAuthor(noticeDTO.getAuthor());
            notice.setCategory(noticeDTO.getCategory());
            notice.setImg(noticeDTO.getImg());

            Notice updatedNotice = noticeRepository.save(notice);
            return noticeMapper.toDto(updatedNotice);
        } else {
            throw new Exception("Noticia no encontrada");
        }
    }
}
