package com.hamdeen.backend.controller;

import com.hamdeen.backend.dtos.CreateNoteRequest;
import com.hamdeen.backend.dtos.NoteDto;
import com.hamdeen.backend.exceptions.NoteNotFoundException;
import com.hamdeen.backend.services.NoteService;
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
            UriComponentsBuilder uriComponentsBuilder
    ) {
        var noteDto = noteService.createNote(request.getTitle(), request.getContent());
        var uri = uriComponentsBuilder.path("/notes/{id}").buildAndExpand(noteDto.getId()).toUri();

        return ResponseEntity.created(uri).body(noteDto);
    }

    @GetMapping
    public List<NoteDto> getAllNotes() {
        return  noteService.getAllNotes();
    }

    @GetMapping("/{id}")
    public NoteDto getNoteById(@PathVariable String id) {
        return noteService.getNoteById(id);
    }

    @PutMapping("/{id}")
    public NoteDto updateNoteById(@PathVariable String id, @RequestBody CreateNoteRequest request) {
        return noteService.updateNote(id, request.getTitle(), request.getContent());
    }

    @PatchMapping("/{id}/archive")
    public NoteDto archiveNote(@PathVariable String id) {
        return noteService.archiveNote(id);
    }

    @ExceptionHandler(NoteNotFoundException.class)
    public ResponseEntity<Map<String, String>> handleNoteNotFoundException() {
        return  new ResponseEntity<>(Map.of("message", "Note not found"), HttpStatus.NOT_FOUND);
    }
}
