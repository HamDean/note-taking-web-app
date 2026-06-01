package com.hamdeen.backend.dtos;

import lombok.Data;

@Data
public class CreateNoteRequest {
    private String title;
    private String content;
}
