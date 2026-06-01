package com.hamdeen.backend.services;

import com.hamdeen.backend.dtos.NoteDto;
import com.hamdeen.backend.entities.Note;
import com.hamdeen.backend.mappers.NoteMapper;
import com.hamdeen.backend.repositories.NoteRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@AllArgsConstructor
public class NoteService {
    private final NoteMapper noteMapper;
    private final NoteRepository noteRepository;

    public NoteDto createNote(String title, String content) {
        var note = new Note();

        note.setId(java.util.UUID.randomUUID().toString());
        note.setTitle(title);
        note.setContent(content);
        note.setCreatedAt(LocalDateTime.now());
        note.setUpdatedAt(LocalDateTime.now());
        note.setIsArchived(false);

        noteRepository.save(note);

        return noteMapper.toNoteDto(note);
    }
}
