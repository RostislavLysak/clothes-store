"use client";

import Product from "./components/Product";
import { TProduct } from "./page";

interface ViewProps {
  data: TProduct[];
  category: string;
}

export default function View({ data, category }: ViewProps) {
  return (
    <div className="flex flex-wrap justify-center m-auto w-full">
      {data.map((item) => (
        <Product key={item.title} product={item} category={category} />
      ))}
    </div>
  );
}
