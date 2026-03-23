package com.testtech.backend.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Setter;
import lombok.Getter;

import java.util.List;

@Entity
@Table(name = "categories")
//J'ai mis getter et setter pour tout les champs, meme si setter pour id est inutile.
@Getter
@Setter
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(columnDefinition = "TEXT")
    private String name;

    @Column(columnDefinition = "TEXT")
    private String description;

    @JsonManagedReference
    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Question> questions;

    public Category() {}

    public Category(String name, String description) {
        this.name = name;
        this.description = description;
    }
}
