package com.hamdeen.backend.controller;

import com.hamdeen.backend.dtos.ChangePasswordRequest;
import com.hamdeen.backend.dtos.UserDto;
import com.hamdeen.backend.mappers.UserMapper;
import com.hamdeen.backend.services.UserService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @PutMapping("/change-password")
    public ResponseEntity<Void> changePassword(@Valid @RequestBody ChangePasswordRequest request){
        userService.changePassword(request.getOldPassword(), request.getNewPassword());

        return ResponseEntity.ok().build();
    }
}
