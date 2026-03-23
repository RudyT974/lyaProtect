package com.testtech.backend.controller;

import com.testtech.backend.dto.CategoryDTO;
import com.testtech.backend.dto.QuestionDTO;
import com.testtech.backend.service.CategoryService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
@CrossOrigin
public class CategoryController {

    private final CategoryService service;

    public CategoryController(CategoryService service) {
        this.service = service;
    }

    @GetMapping
    public List<CategoryDTO> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public CategoryDTO getOne(@PathVariable Long id) {
        return service.getOne(id);
    }

    @PostMapping
    public CategoryDTO create(@RequestBody CategoryDTO dto) {
        return service.create(dto);
    }

    @PostMapping("/{id}/questions")
    public QuestionDTO addQuestion(@PathVariable Long id, @RequestBody QuestionDTO dto) {
        return service.addQuestion(id, dto);
    }
}