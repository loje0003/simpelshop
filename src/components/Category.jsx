"use client";

import { useRouter, useSearchParams } from "next/navigation";

const Category = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleFilter = (category) => {
    const params = new URLSearchParams(searchParams);

    // toggle filter
    if (params.get("category") === category) {
      params.delete("category");
    } else {
      params.set("category", category);
    }

    router.push("?" + params.toString());
  };

  return (
    <div className="flex gap-4 p-4 mx-7">
      <button onClick={() => handleFilter("Beauty")}>Beauty</button>
      <button onClick={() => handleFilter("Groceries")}>Groceries</button>
      <button onClick={() => handleFilter("Fragrances")}>Fragrances</button>
      <button onClick={() => handleFilter("Furniture")}>Furniture</button>
    </div>
  );
};

export default Category;
