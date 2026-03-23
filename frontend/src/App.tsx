import { useEffect, useState } from "react";
import {
    Container,
    Typography,
    TextField,
    Card,
    CardContent,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    CircularProgress,
    Box
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Header from "./Header";
import Footer from "./Footer";

type Question = {
    id: number;
    question: string;
    answer: string;
};

type Category = {
    id: number;
    name: string;
    description: string;
    questions: Question[];
};

function App() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [search, setSearch] = useState("");
    const [results, setResults] = useState<Question[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch("/api/categories")
            .then(res => res.json())
            .then(data => setCategories(data));
    }, []);

    useEffect(() => {
        const delay = setTimeout(() => {
            if (search.length > 2) {
                handleSearch();
            } else {
                setResults([]);
            }
        }, 400);

        return () => clearTimeout(delay);
    }, [search]);

    const handleSearch = async () => {
        setLoading(true);
        const res = await fetch(`/api/questions/search?q=${search}`);
        const data = await res.json();
        setResults(data);
        setLoading(false);
    };

    return (
        <><>
            <Header/>
            <Container maxWidth="md" sx={{mt: 4}}>

                <Typography variant="h4" gutterBottom>
                    FAQ Manager
                </Typography>

                <Box mb={4}>
                    <TextField fullWidth
                        label="Une question ?"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}/>
                </Box>

                {loading && (
                    <Box display="flex" justifyContent="center" mb={2}>
                        <CircularProgress/>
                    </Box>
                )}

                {results.length > 0 && (
                    <>
                        <Typography variant="h6" gutterBottom>
                            Résultats
                        </Typography>

                        {results.map((q) => (
                            <Card key={q.id} sx={{mb: 2}}>
                                <CardContent>
                                    <Typography fontWeight="bold">
                                        {q.question}
                                    </Typography>
                                    <Typography color="text.secondary">
                                        {q.answer}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </>
                )}

                {!loading && results.length === 0 && search.length > 2 && (
                    <Typography color="text.secondary" mb={2}>
                        Aucun résultat trouvé
                    </Typography>
                )}

                <Typography variant="h5" sx={{mt: 4, mb: 2}}>
                    Catégories
                </Typography>

                {categories.map((cat) => (
                    <Accordion key={cat.id}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                            <Typography fontWeight="bold">
                                {cat.name}
                            </Typography>
                            {/* Par choix de goût, je n’ai pas affiché la description.*/}
                        </AccordionSummary>

                        <AccordionDetails>
                            {cat.questions.map((q) => (
                                <Card key={q.id} sx={{mb: 2}}>
                                    <CardContent>
                                        <Typography fontWeight="bold">
                                            {q.question}
                                        </Typography>
                                        <Typography color="text.secondary">
                                            {q.answer}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            ))}
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Container></>
            <Footer/>
        </>
    );
}

export default App;