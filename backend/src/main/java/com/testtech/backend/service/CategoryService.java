package com.testtech.backend.service;

import com.testtech.backend.dto.CategoryDTO;
import com.testtech.backend.dto.QuestionDTO;
import com.testtech.backend.entity.Category;
import com.testtech.backend.entity.Question;
import com.testtech.backend.mapper.CategoryMapper;
import com.testtech.backend.mapper.QuestionMapper;
import com.testtech.backend.repository.CategoryRepository;
import com.testtech.backend.repository.QuestionRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CategoryService {

    private final CategoryRepository categoryRepository;
    private final QuestionRepository questionRepository;

    public CategoryService(CategoryRepository categoryRepository, QuestionRepository questionRepository) {
        this.categoryRepository = categoryRepository;
        this.questionRepository = questionRepository;
    }

    public List<CategoryDTO> getAll() {
        return categoryRepository.findAll()
                .stream()
                .map(CategoryMapper::toDTO)
                .collect(Collectors.toList());
    }

    public CategoryDTO getOne(Long id) {
        Category category = categoryRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Category not found"));

        return CategoryMapper.toDTO(category);
    }

    public CategoryDTO create(CategoryDTO dto) {
        Category category = CategoryMapper.toEntity(dto);
        return CategoryMapper.toDTO(categoryRepository.save(category));
    }

    public QuestionDTO addQuestion(Long categoryId, QuestionDTO dto) {
        Category category = categoryRepository.findById(categoryId)
                .orElseThrow(() -> new RuntimeException("Category not found"));

        Question question = QuestionMapper.toEntity(dto);
        question.setCategory(category);

        return QuestionMapper.toDTO(questionRepository.save(question));
    }
}