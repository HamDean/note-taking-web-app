package com.hamdeen.backend.repositories;

import com.hamdeen.backend.entities.Note;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface NoteRepository extends JpaRepository<Note, Integer> {
    Optional<Note> findById(String id);

//    @Query("select n from Note n where n.isArchived = true ")
    List<Note> findAllByIsArchivedIsTrue();
}
