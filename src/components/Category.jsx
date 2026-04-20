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
    <div className="flex items-center gap-4 ">
      <button className="px-5 py-2 rounded-full border border-blue-950 bg-yellow-200 text-blue-950 text-xl font-medium cursor-pointer" onClick={() => handleFilter("Beauty")}>
        Beauty
      </button>
      <button className="px-5 py-2 rounded-full border border-blue-950 bg-yellow-200 text-blue-950 text-xl font-medium cursor-pointer" onClick={() => handleFilter("Groceries")}>
        Groceries
      </button>
      <button className="px-5 py-2 rounded-full border border-blue-950 bg-yellow-200 text-blue-950 text-xl font-medium cursor-pointer" onClick={() => handleFilter("Fragrances")}>
        Fragrances
      </button>
      <button className="px-5 py-2 rounded-full border border-blue-950 bg-yellow-200 text-blue-950 text-xl font-medium cursor-pointer" onClick={() => handleFilter("Furniture")}>
        Furniture
      </button>
    </div>
  );
};

export default Category;
