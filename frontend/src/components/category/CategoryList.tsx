import { Category } from "../../types";
import CategoryItem from "./CategoryItem";

type Props = {
    categories: Category[];
};

export default function CategoryList({ categories }: Props) {
    return (
        <>
            {categories.map((cat) => (
                <CategoryItem key={cat.id} category={cat} />
            ))}
        </>
    );
}