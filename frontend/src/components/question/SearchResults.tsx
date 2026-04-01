import { Typography } from "@mui/material";
import QuestionCard from "./QuestionCard";
import { Question } from "../../types";

type Props = {
    results: Question[];
};

export default function SearchResults({ results }: Props) {
    return (
        <>
            <Typography variant="h6" gutterBottom>
                Résultats
            </Typography>

            {results.map((q) => (
                <QuestionCard key={q.id} question={q} />
            ))}
        </>
    );
}