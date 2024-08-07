// NoticeMapper.java
package com.example.p02.mapper;

import com.example.p02.dto.NoticeDTO;
import com.example.p02.model.Notice;
import org.springframework.stereotype.Component;

@Component
public class NoticeMapper {

    public Notice toEntity(NoticeDTO noticeDTO) {
        Notice notice = new Notice();
        notice.setTitle(noticeDTO.getTitle());
        notice.setDate(noticeDTO.getDate());
        notice.setContent(noticeDTO.getContent());
        notice.setAuthor(noticeDTO.getAuthor());
        notice.setCategory(noticeDTO.getCategory());
        return notice;
    }

    public NoticeDTO toDto(Notice notice) {
        NoticeDTO noticeDTO = new NoticeDTO();
        noticeDTO.setTitle(notice.getTitle());
        noticeDTO.setDate(notice.getDate());
        noticeDTO.setContent(notice.getContent());
        noticeDTO.setAuthor(notice.getAuthor());
        noticeDTO.setCategory(notice.getCategory());
        return noticeDTO;
    }
}
