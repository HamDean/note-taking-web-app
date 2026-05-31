package com.hamdeen.backend.repositories;

import com.hamdeen.backend.entities.Note;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NoteRepository extends JpaRepository<Note, Integer> {
}
