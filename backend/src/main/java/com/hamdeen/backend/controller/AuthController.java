package com.hamdeen.backend.controller;

import com.hamdeen.backend.configs.JwtConfig;
import com.hamdeen.backend.dtos.ChangePasswordRequest;
import com.hamdeen.backend.dtos.JwtResponse;
import com.hamdeen.backend.dtos.RegisterUserRequest;
import com.hamdeen.backend.dtos.UserDto;
import com.hamdeen.backend.mappers.UserMapper;
import com.hamdeen.backend.services.AuthService;
import com.hamdeen.backend.services.JwtService;
import com.hamdeen.backend.services.UserService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.Map;

@RestController
@RequestMapping("/auth")
@AllArgsConstructor
public class AuthController {
    private final AuthService authService;
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;
    private final JwtConfig jwtConfig;
    private final UserMapper userMapper;
    private final UserService userService;

    @PostMapping("/register")
    public ResponseEntity<UserDto> register(
            @Valid @RequestBody RegisterUserRequest request,
            UriComponentsBuilder uriComponentsBuilder
    ) {
        var userDto = authService.createUser(request.getEmail(), request.getPassword());
        var uri = uriComponentsBuilder.path("/auth/login").build().toUri();

        return ResponseEntity.created(uri).body(userDto);
    }

    @PostMapping("/login")
    public JwtResponse login(
            @Valid @RequestBody RegisterUserRequest request,
            HttpServletResponse response
    ) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));

        var accessToken = jwtService.generateAccessToken(request.getEmail());
        var refreshToken = jwtService.generateRefreshToken(request.getEmail());

        var cookie = new Cookie("refreshToken", refreshToken);
        cookie.setMaxAge(jwtConfig.getRefreshTokenValiditySeconds());
        cookie.setPath("/refresh-token");
        cookie.setHttpOnly(true);
        cookie.setSecure(true);

        response.addCookie(cookie);

        return new JwtResponse(accessToken);
    }

    @ExceptionHandler(BadCredentialsException.class)
    public ResponseEntity<Map<String, String>> handleBadCredentialsException() {
        return ResponseEntity.badRequest().body(Map.of("message", "Invalid credentials"));
    }
}
