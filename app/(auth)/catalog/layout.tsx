"use client";

import CategoriesList from "./components/CategoriesList";

const categories = ["hoodie", "shoes", "outerwear"];

export default function CatalogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <div className="hidden lg:flex flex-col p-6">
        <h1 className="text-gray-400 font-bold font-sans mb-4">Categories</h1>
        <CategoriesList categories={categories} />
      </div>
      <div>{children}</div>
    </div>
  );
}
