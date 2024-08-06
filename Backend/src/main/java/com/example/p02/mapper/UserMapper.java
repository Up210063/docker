package com.example.p02.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.NullValuePropertyMappingStrategy;
import org.mapstruct.InjectionStrategy;

import com.example.p02.dto.UserDTO;
import com.example.p02.model.User;
import java.util.List;

@Mapper(
  componentModel = "spring",
  injectionStrategy = InjectionStrategy.CONSTRUCTOR,
  nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE
)
public interface UserMapper {

  UserDTO toDTO(User model);

  List<UserDTO> toDTO(List<User> model);

  @Mapping(target = "idUsuario", ignore = true)
  User toModel(UserDTO dto);
}
