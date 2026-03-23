package com.testtech.backend.dto;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class QuestionDTO {

    private Long id;
    private String question;
    private String answer;

    public QuestionDTO() {}

    public QuestionDTO(Long id, String question, String answer) {
        this.id = id;
        this.question = question;
        this.answer = answer;
    }

}