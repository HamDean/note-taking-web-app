package com.hamdeen.backend.dtos;

import lombok.Data;

import java.util.UUID;

@Data
public class NoteDto {
    private UUID id;
    private String title;
    private String content;
    private Boolean isArchived;
    private String createdAt;
    private String updatedAt;
}
