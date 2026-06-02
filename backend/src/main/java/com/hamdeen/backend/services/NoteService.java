package com.hamdeen.backend.services;

import com.hamdeen.backend.dtos.NoteDto;
import com.hamdeen.backend.entities.Note;
import com.hamdeen.backend.entities.Tag;
import com.hamdeen.backend.exceptions.NoteNotFoundException;
import com.hamdeen.backend.mappers.NoteMapper;
import com.hamdeen.backend.repositories.NoteRepository;
import com.hamdeen.backend.repositories.TagRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import java.util.UUID;

@Service
@AllArgsConstructor
public class NoteService {
    private final NoteMapper noteMapper;
    private final NoteRepository noteRepository;
    private final TagRepository tagRepository;

    public NoteDto createNote(String title, String content, String tags) {
        var note = new Note();

        if (tags != null && !tags.isBlank()) {
            Arrays.stream(tags.split(",")).toList().forEach(tag -> {
                var tagEntity = tagRepository.findByName(tag.toLowerCase()).orElse(null);
                if (tagEntity == null) {
                    var newTag = new Tag();
                    newTag.setName(tag.toLowerCase().trim());
                    newTag.setCreatedAt(LocalDateTime.now());
                    tagEntity = tagRepository.save(newTag);
                };
                note.getTags().add(tagEntity);
            });
        }

        note.setId(UUID.randomUUID().toString());
        note.setTitle(title);
        note.setContent(content);
        note.setCreatedAt(LocalDateTime.now());
        note.setUpdatedAt(LocalDateTime.now());
        note.setIsArchived(false);

        noteRepository.save(note);

        return noteMapper.toNoteDto(note);
    }

    public List<NoteDto> getAllNotes(String filter) {
        List<Note> notes = List.of();
        var tag = tagRepository.findByName(filter.toLowerCase()).orElse(null);

        if (Objects.equals(filter, "") || tag == null) notes = noteRepository.findAll();
        else {
            notes = noteRepository.findAll();
            notes = notes.stream().filter(note -> note.getTags().contains(tag)).toList();
        }

        return notes.stream().map(noteMapper::toNoteDto).toList();
    }

    public NoteDto getNoteById(String id) {
        var note = noteRepository.findById(id).orElse(null);
        if (note == null) throw new NoteNotFoundException();

        return noteMapper.toNoteDto(note);
    }

    public NoteDto archiveNote(String id) {
        var note = noteRepository.findById(id).orElse(null);

        if (note == null) throw new NoteNotFoundException();

        note.setIsArchived(true);
        note.setUpdatedAt(LocalDateTime.now());

        noteRepository.save(note);

        return noteMapper.toNoteDto(note);
    }

    public NoteDto updateNote(String id, String title, String content) {
        var note = noteRepository.findById(id).orElse(null);
        if (note == null) throw new NoteNotFoundException();

        note.setTitle(title);
        note.setContent(content);
        note.setUpdatedAt(LocalDateTime.now());

        noteRepository.save(note);

        return noteMapper.toNoteDto(note);
    }

    public void  deleteNote(String id) {
        var note = noteRepository.findById(id).orElse(null);
        if (note == null) throw new NoteNotFoundException();
        noteRepository.delete(note);
    }

    public  List<NoteDto> getAllArchivedNotes() {
        var notes = noteRepository.findAllByIsArchivedIsTrue();

        return notes.stream().map(noteMapper::toNoteDto).toList();
    }
}
