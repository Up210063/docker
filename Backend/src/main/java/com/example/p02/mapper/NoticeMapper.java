// NoticeMapper.java
package com.example.p02.mapper;

import com.example.p02.dto.NoticeDTO;
import com.example.p02.model.Notice;
import org.springframework.stereotype.Component;

@Component
public class NoticeMapper {

    public Notice toEntity(NoticeDTO noticeDTO) {
        Notice notice = new Notice();
        notice.setId(noticeDTO.getId()); // Ensure the ID is set for updates
        notice.setTitle(noticeDTO.getTitle());
        notice.setDate(noticeDTO.getDate());
        notice.setContent(noticeDTO.getContent());
        notice.setAuthor(noticeDTO.getAuthor());
        notice.setCategory(noticeDTO.getCategory());
        notice.setImg(noticeDTO.getImg());
        return notice;
    }

    public NoticeDTO toDto(Notice notice) {
        NoticeDTO noticeDTO = new NoticeDTO();
        noticeDTO.setId(notice.getId());
        noticeDTO.setTitle(notice.getTitle());
        noticeDTO.setDate(notice.getDate());
        noticeDTO.setContent(notice.getContent());
        noticeDTO.setAuthor(notice.getAuthor());
        noticeDTO.setCategory(notice.getCategory());
        noticeDTO.setImg(notice.getImg());
        return noticeDTO;
    }
}
