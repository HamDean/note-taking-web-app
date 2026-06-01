package com.hamdeen.backend.mappers;

import com.hamdeen.backend.dtos.NoteDto;
import com.hamdeen.backend.entities.Note;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface NoteMapper {
    NoteDto toNoteDto(Note note);
}
