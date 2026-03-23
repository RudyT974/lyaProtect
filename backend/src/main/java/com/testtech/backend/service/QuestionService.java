package com.testtech.backend.service;

import com.testtech.backend.dto.QuestionDTO;
import com.testtech.backend.mapper.QuestionMapper;
import com.testtech.backend.repository.QuestionRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class QuestionService {

    private final QuestionRepository repository;

    public QuestionService(QuestionRepository repository) {
        this.repository = repository;
    }

    public List<QuestionDTO> search(String keyword) {
        return repository.findByQuestionContainingIgnoreCase(keyword)
                .stream()
                .map(QuestionMapper::toDTO)
                .collect(Collectors.toList());
    }
}