package com.hamdeen.backend.mappers;

import com.hamdeen.backend.dtos.UserDto;
import com.hamdeen.backend.entities.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {
    UserDto toUserDto(User user);
}
