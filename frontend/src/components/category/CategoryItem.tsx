import {Accordion, AccordionSummary, AccordionDetails, Typography} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Category } from "../../types";
import QuestionCard from "../question/QuestionCard";

type Props = {
    category: Category;
};

export default function CategoryItem({ category }: Props) {
    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className="category-title">
                    {category.name}
                </Typography>
            </AccordionSummary>

            <AccordionDetails>
                {category.questions.map((q) => (
                    <QuestionCard key={q.id} question={q} />
                ))}
            </AccordionDetails>
        </Accordion>
    );
}