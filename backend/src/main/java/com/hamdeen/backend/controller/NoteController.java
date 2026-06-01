package com.hamdeen.backend.controller;

import com.hamdeen.backend.dtos.CreateNoteRequest;
import com.hamdeen.backend.dtos.NoteDto;
import com.hamdeen.backend.services.NoteService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;

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
}
