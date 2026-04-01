export const fetchCategories = async () => {
    const res = await fetch("/api/categories");
    return res.json();
};

export const searchQuestions = async (query: string) => {
    const res = await fetch(`/api/questions/search?q=${query}`);
    return res.json();
};