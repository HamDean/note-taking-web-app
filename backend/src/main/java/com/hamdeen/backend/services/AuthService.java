package com.hamdeen.backend.services;

import com.hamdeen.backend.dtos.UserDto;
import com.hamdeen.backend.entities.User;
import com.hamdeen.backend.mappers.UserMapper;
import com.hamdeen.backend.repositories.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@AllArgsConstructor
public class AuthService {
    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private final PasswordEncoder passwordEncoder;

    public UserDto createUser(String email, String password) {
        var newUser = new User();

        newUser.setId(java.util.UUID.randomUUID().toString());
        newUser.setEmail(email);
        newUser.setPassword(passwordEncoder.encode(password));
        newUser.setCreatedAt(LocalDateTime.now());
        newUser.setUpdatedAt(LocalDateTime.now());

        userRepository.save(newUser);

        return userMapper.toUserDto(newUser);
    }
}
