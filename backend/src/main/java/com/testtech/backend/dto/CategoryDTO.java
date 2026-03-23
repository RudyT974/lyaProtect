package com.testtech.backend.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Setter
@Getter
public class CategoryDTO {

    private Long id;
    private String name;
    private String description;
    private List<QuestionDTO> questions;

    public CategoryDTO() {}

    public CategoryDTO(Long id, String name, String description, List<QuestionDTO> questions) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.questions = questions;
    }

}