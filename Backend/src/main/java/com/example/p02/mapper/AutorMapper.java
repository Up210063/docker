package com.example.p02.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.NullValuePropertyMappingStrategy;
import org.mapstruct.InjectionStrategy;

import com.example.p02.dto.AutorDTO;
import com.example.p02.model.Autor;
import java.util.List;

@Mapper(
  componentModel = "spring",
  injectionStrategy = InjectionStrategy.CONSTRUCTOR,
  nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE
)
public interface AutorMapper {

  AutorDTO toDTO(Autor model);

  List<AutorDTO> toDTO(List<Autor> model);

  @Mapping(target = "idAutor", ignore = true)
  Autor toModel(AutorDTO dto);
}
