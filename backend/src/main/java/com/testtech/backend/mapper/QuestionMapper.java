package com.testtech.backend.mapper;

import com.testtech.backend.dto.QuestionDTO;
import com.testtech.backend.entity.Question;

public class QuestionMapper {

    public static QuestionDTO toDTO(Question question) {
        return new QuestionDTO(
                question.getId(),
                question.getQuestion(),
                question.getAnswer()
        );
    }

    public static Question toEntity(QuestionDTO dto) {
        Question question = new Question();
        question.setQuestion(dto.getQuestion());
        question.setAnswer(dto.getAnswer());
        return question;
    }
}