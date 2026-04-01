package com.testtech.backend.controller;

public final class Endpoint {

    private Endpoint() {

    }

    public static final String API = "/api";


    public static final String CATEGORIES = API + "/categories";
    public static final String CATEGORY_BY_ID = "/{id}";
    public static final String CATEGORY_QUESTIONS = "/{id}/questions";


    public static final String QUESTIONS = API + "/questions";
    public static final String QUESTIONS_SEARCH = "/search";
}
