package com.hamdeen.backend.services;

import com.hamdeen.backend.exceptions.UserNotFoundException;
import com.hamdeen.backend.repositories.UserRepository;
import lombok.AllArgsConstructor;
import org.jspecify.annotations.NonNull;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
@AllArgsConstructor
public class UserService implements UserDetailsService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(@NonNull String email) throws UsernameNotFoundException {
        var user = userRepository.findByEmail(email).orElseThrow();

        return new User(user.getEmail(), user.getPassword(), Collections.emptyList());
    }

    public com.hamdeen.backend.entities.User getCurrentUser() {
        var auth = SecurityContextHolder.getContext().getAuthentication();
        assert auth != null;
        var email = (String) auth.getPrincipal();
        return userRepository.findByEmail(email).orElseThrow();
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
}
