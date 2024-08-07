// NoticeService.java
package com.example.p02.service;

import com.example.p02.dto.NoticeDTO;
import com.example.p02.mapper.NoticeMapper;
import com.example.p02.model.Notice;
import com.example.p02.repository.NoticeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NoticeService {

    @Autowired
    private NoticeRepository noticeRepository;

    @Autowired
    private NoticeMapper noticeMapper;

    public void saveNotice(NoticeDTO noticeDTO) {
        Notice notice = noticeMapper.toEntity(noticeDTO);
        noticeRepository.save(notice);
    }
}
