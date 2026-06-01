package com.hamdeen.backend.controller;

import com.hamdeen.backend.dtos.CreateNoteRequest;
import com.hamdeen.backend.dtos.NoteDto;
import com.hamdeen.backend.services.NoteService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/notes")
@AllArgsConstructor
public class NoteController {
    private final NoteService noteService;

    @PostMapping
    public ResponseEntity<NoteDto> createNote(@RequestBody CreateNoteRequest request) {
        var noteDto = noteService.createNote(request.getTitle(), request.getContent());
        return ResponseEntity.ok(noteDto);
    }
}
