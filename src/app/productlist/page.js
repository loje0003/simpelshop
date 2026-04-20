import Category from "@/components/Category";
import Search from "@/components/Search";
import ProductList from "@/components/ProductList";
import { Suspense } from "react";

const List = ({ searchParams }) => {
  return (
    <div>
      <h1 className="text-7xl text-blue-950 mx-10 mt-5">All Products</h1>
      <div className="flex justify-between mr-40">
        <Category />
        <Search />
      </div>
      <Suspense fallback={<div>Loading products…</div>}>
        <ProductList searchParams={searchParams} />
      </Suspense>
    </div>
  );
};

export default List;
