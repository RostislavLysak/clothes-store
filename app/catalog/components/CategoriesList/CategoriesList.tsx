import Link from "next/link";
import { useParams } from "next/navigation";

type CategoriesListProps = {
  categories: string[];
};

const CategoriesList = ({ categories }: CategoriesListProps) => {
  const { slug } = useParams();
  return (
    <>
      {categories.map((item: string) => (
        <Link
          key={item}
          href={"/catalog/" + item}
          className={"text-base xl:text-lg p-2" + `${slug === item ? " text-blue-300" : ""}`}
        >
          {item[0].toUpperCase() + item.slice(1)}
        </Link>
      ))}
    </>
  );
};

export default CategoriesList;
