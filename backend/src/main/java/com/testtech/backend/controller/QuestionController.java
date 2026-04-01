package com.testtech.backend.controller;

import com.testtech.backend.dto.QuestionDTO;
import com.testtech.backend.service.QuestionService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(Endpoint.QUESTIONS)
@CrossOrigin
public class QuestionController {

    private final QuestionService service;

    public QuestionController(QuestionService service) {
        this.service = service;
    }

    @GetMapping(Endpoint.QUESTIONS_SEARCH)
    public List<QuestionDTO> search(@RequestParam String q) {
        return service.search(q);
    }
}