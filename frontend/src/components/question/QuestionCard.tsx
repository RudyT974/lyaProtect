import { Card, CardContent, Typography } from "@mui/material";
import { Question } from "../../types";

type Props = {
    question: Question;
};

export default function QuestionCard({ question }: Props) {
    return (
        <Card className="question-card">
            <CardContent>
                <Typography className="question-title">
                    {question.question}
                </Typography>
                <Typography className="question-answer">
                    {question.answer}
                </Typography>
            </CardContent>
        </Card>
    );
}