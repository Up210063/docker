package com.example.p02.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.NullValuePropertyMappingStrategy;
import org.mapstruct.InjectionStrategy;

import com.example.p02.dto.NoticeDTO;
import com.example.p02.model.Notice;
import java.util.List;

@Mapper(
  componentModel = "spring",
  injectionStrategy = InjectionStrategy.CONSTRUCTOR,
  nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE
)
public interface NoticeMapper {

  NoticeDTO toDTO(Notice model);

  List<NoticeDTO> toDTO(List<Notice> model);

  @Mapping(target = "idNoticia", ignore = true)
  Notice toModel(NoticeDTO dto);
}
