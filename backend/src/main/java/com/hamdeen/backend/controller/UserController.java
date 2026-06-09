package com.hamdeen.backend.controller;

import com.hamdeen.backend.dtos.UserDto;
import com.hamdeen.backend.mappers.UserMapper;
import com.hamdeen.backend.services.UserService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
@AllArgsConstructor
public class UserController {
    private final UserService userService;
    private final UserMapper userMapper;

    @GetMapping("/me")
    public UserDto getCurrentUser() {
        var user = userService.getCurrentUser();
        return userMapper.toUserDto(user);
    }
}
