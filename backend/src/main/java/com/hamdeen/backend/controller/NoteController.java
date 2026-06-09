package com.hamdeen.backend.controller;

import com.hamdeen.backend.dtos.CreateNoteRequest;
import com.hamdeen.backend.dtos.NoteDto;
import com.hamdeen.backend.exceptions.NoteNotFoundException;
import com.hamdeen.backend.services.NoteService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/notes")
@AllArgsConstructor
public class NoteController {
    private final NoteService noteService;

    @PostMapping
    public ResponseEntity<NoteDto> createNote(
            @RequestBody CreateNoteRequest request,
            @Valid UriComponentsBuilder uriComponentsBuilder
    ) {
        var noteDto = noteService.createNote(request.getTitle(), request.getContent(), request.getTags());
        var uri = uriComponentsBuilder.path("/notes/{id}").buildAndExpand(noteDto.getId()).toUri();

        return ResponseEntity.created(uri).body(noteDto);
    }

    @GetMapping
    public List<NoteDto> getAllNotes(
            @RequestParam(name = "filter", required = false, defaultValue = "") String filter
    ) {
        return  noteService.getAllNotes(filter);
    }

    @GetMapping("/archived")
    public List<NoteDto> getAllArchivedNotes() {
        return noteService.getAllArchivedNotes();
    }

    @GetMapping("/{id}")
    public NoteDto getNoteById(@PathVariable String id) {
        return noteService.getNoteById(id);
    }

    @PutMapping("/{id}")
    public NoteDto updateNoteById(@PathVariable String id, @Valid @RequestBody CreateNoteRequest request) {
        return noteService.updateNote(id, request.getTitle(), request.getContent());
    }

    @PatchMapping("/{id}/archive")
    public NoteDto archiveNote(@PathVariable String id) {
        return noteService.archiveNote(id);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteNoteById(@PathVariable String id) {
        noteService.deleteNote(id);
        return ResponseEntity.noContent().build();
    }

    @ExceptionHandler(NoteNotFoundException.class)
    public ResponseEntity<Map<String, String>> handleNoteNotFoundException() {
        return  new ResponseEntity<>(Map.of("message", "Note not found"), HttpStatus.NOT_FOUND);
    }
}
