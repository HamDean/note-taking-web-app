package com.hamdeen.backend.controller;

import com.hamdeen.backend.dtos.RegisterUserRequest;
import com.hamdeen.backend.dtos.UserDto;
import com.hamdeen.backend.services.AuthService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@RequestMapping("/auth")
@AllArgsConstructor
public class AuthController {
    private final AuthService authService;
    private final AuthenticationManager authenticationManager;

    @PostMapping("/register")
    public ResponseEntity<UserDto> register(
            @RequestBody RegisterUserRequest request,
            UriComponentsBuilder uriComponentsBuilder
    ) {
        var userDto = authService.createUser(request.getEmail(), request.getPassword());
        var uri = uriComponentsBuilder.path("/auth/login").build().toUri();

        return ResponseEntity.created(uri).body(userDto);
    }

    @PostMapping("/login")
    public void login(@RequestBody RegisterUserRequest request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
    }
}
