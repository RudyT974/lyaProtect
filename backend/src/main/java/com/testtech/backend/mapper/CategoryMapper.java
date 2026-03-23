package com.testtech.backend.mapper;

import com.testtech.backend.dto.CategoryDTO;
import com.testtech.backend.entity.Category;

import java.util.stream.Collectors;

public class CategoryMapper {

    public static CategoryDTO toDTO(Category category) {
        return new CategoryDTO(
                category.getId(),
                category.getName(),
                category.getDescription(),
                category.getQuestions() != null
                        ? category.getQuestions().stream()
                        .map(QuestionMapper::toDTO)
                        .collect(Collectors.toList()) : null
        );
    }

    public static Category toEntity(CategoryDTO dto) {
        Category category = new Category();
        category.setName(dto.getName());
        category.setDescription(dto.getDescription());
        return category;
    }
}