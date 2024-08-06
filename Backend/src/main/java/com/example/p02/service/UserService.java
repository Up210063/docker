package com.example.p02.service;

import com.example.p02.dto.UserDTO;
import com.example.p02.mapper.UserMapper;
import com.example.p02.model.User;
import com.example.p02.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserMapper userMapper;

    public void registerUser(UserDTO userDTO) {
        if (userRepository.existsByEmail(userDTO.getEmail())) {
            throw new IllegalArgumentException("El correo ya está registrado");
        }

        // Encripta la contraseña aquí si es necesario
        User user = userMapper.toEntity(userDTO);
        userRepository.save(user);
    }
}
