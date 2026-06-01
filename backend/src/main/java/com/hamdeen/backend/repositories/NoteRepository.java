package com.hamdeen.backend.repositories;

import com.hamdeen.backend.entities.Note;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface NoteRepository extends JpaRepository<Note, Integer> {
    Optional<Note> findById(String id);
}
