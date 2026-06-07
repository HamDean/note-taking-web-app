package com.hamdeen.backend.services;

import com.hamdeen.backend.configs.JwtConfig;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
@AllArgsConstructor
public class JwtService {
    private final JwtConfig jwtConfig;

    public String generateRefreshToken(String email) {
        return generateToken(email, jwtConfig.getRefreshTokenValiditySeconds());
    }

    public String generateAccessToken(String email) {
        return generateToken(email, jwtConfig.getAccessTokenValiditySeconds());
    }

    public String generateToken(String email, int expiration) {
        return Jwts.builder()
            .subject(email)
            .issuedAt(new Date())
            .expiration(new Date(System.currentTimeMillis() + 1000L * expiration))
            .signWith(Keys.hmacShaKeyFor(jwtConfig.getSecret().getBytes()))
            .compact();
    }

//    TODO: change from 403 to 401
}
