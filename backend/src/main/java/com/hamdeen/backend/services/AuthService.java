package com.hamdeen.backend.services;

import com.hamdeen.backend.dtos.UserDto;
import com.hamdeen.backend.entities.User;
import com.hamdeen.backend.exceptions.UserNotFoundException;
import com.hamdeen.backend.mappers.UserMapper;
import com.hamdeen.backend.repositories.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.context.SecurityContextHolder;
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

    public void changePassword(String oldPassword, String newPassword) {
        var authenticatedUserEmail = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        var authenticatedUser = userRepository.findByEmail(authenticatedUserEmail).orElseThrow(UserNotFoundException::new);

        if (!passwordEncoder.matches(oldPassword, authenticatedUser.getPassword())) {
            throw new BadCredentialsException("Invalid old password");
        }

        authenticatedUser.setPassword(passwordEncoder.encode(newPassword));
        userRepository.save(authenticatedUser);
    }

    public User getCurrentUser() {
        var auth = SecurityContextHolder.getContext().getAuthentication();
        assert auth != null;
        var email = (String) auth.getPrincipal();
        return userRepository.findByEmail(email).orElseThrow();
    }
}
