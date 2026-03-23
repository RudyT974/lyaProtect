package com.testtech.backend.repository;

import com.testtech.backend.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuestionRepository extends JpaRepository<Question, Long> {

    List<Question> findByQuestionContainingIgnoreCase(String keyword);

}