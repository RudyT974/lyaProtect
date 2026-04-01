import { useEffect, useState } from "react";
import {
    Container,
    Typography,
    TextField,
    CircularProgress,
    Box
} from "@mui/material";
import { Category, Question } from "../types";
import { fetchCategories, searchQuestions } from "../services/api";
import SearchResults from "../components/question/SearchResults";
import CategoryList from "../components/category/CategoryList";

export default function Home() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [search, setSearch] = useState("");
    const [results, setResults] = useState<Question[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchCategories().then(setCategories);
    }, []);

    useEffect(() => {
        const delay = setTimeout(() => {
            if (search.length > 2) handleSearch();
            else setResults([]);
        }, 400);

        return () => clearTimeout(delay);
    }, [search]);

    const handleSearch = async () => {
        setLoading(true);
        const data = await searchQuestions(search);
        setResults(data);
        setLoading(false);
    };

    return (
        <Container maxWidth="md" className="main-container">

            <Typography variant="h4" gutterBottom>
                FAQ Manager
            </Typography>

            <Box mb={4}>
                <TextField
                    fullWidth
                    label="Une question ?"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </Box>

            {loading && (
                <Box className="loader">
                    <CircularProgress />
                </Box>
            )}

            {results.length > 0 && <SearchResults results={results} />}

            {!loading && results.length === 0 && search.length > 2 && (
                <Typography className="no-result">
                    Aucun résultat trouvé
                </Typography>
            )}

            <Typography variant="h5" className="category-header">
                Catégories
            </Typography>

            <CategoryList categories={categories} />
        </Container>
    );
}