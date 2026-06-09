package com.hamdeen.backend.dtos;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class CreateNoteRequest {
    @NotBlank
    private String title;
    private String content;
    private String tags;
}
