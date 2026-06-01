package com.hamdeen.backend.dtos;

import lombok.Data;

@Data
public class CreateNoteRequest {
    // TODO: validate these fields
    private String title;
    private String content;
}
