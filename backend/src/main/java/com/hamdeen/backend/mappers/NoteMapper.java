package com.hamdeen.backend.mappers;

import com.hamdeen.backend.dtos.NoteDto;
import com.hamdeen.backend.entities.Note;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface NoteMapper {
    @Mapping(target = "createdAt", dateFormat = "dd-MM-yy HH:mm")
    @Mapping(target = "updatedAt", dateFormat = "dd-MM-yy HH:mm")
    NoteDto toNoteDto(Note note);
}
