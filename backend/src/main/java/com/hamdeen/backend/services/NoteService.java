package com.hamdeen.backend.services;

import com.hamdeen.backend.dtos.NoteDto;
import com.hamdeen.backend.entities.Note;
import com.hamdeen.backend.exceptions.NoteNotFoundException;
import com.hamdeen.backend.mappers.NoteMapper;
import com.hamdeen.backend.repositories.NoteRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

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

    public List<NoteDto> getAllNotes() {
        var notes = noteRepository.findAll();
        return notes.stream().map(noteMapper::toNoteDto).toList();
    }

    public NoteDto getNoteById(String id) {
        var note = noteRepository.findById(id).orElse(null);
        if (note == null) throw new NoteNotFoundException();

        return noteMapper.toNoteDto(note);
    }
}
