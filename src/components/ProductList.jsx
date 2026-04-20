import { Suspense } from "react";
import Card from "./Card";

const ProductList = ({ searchParams }) => {
  return (
    <div className="grid grid-cols-5 gap-4 px-5">
      <Suspense fallback={<p>Loading products…</p>}>
        <FetchProduct searchParams={searchParams} />
      </Suspense>
    </div>
  );
};

const FetchProduct = async ({ searchParams }) => {
  "use server";
  const { query } = await searchParams;
  const url = query ? `https://dummyjson.com/products/search?q=${query}` : "https://dummyjson.com/products";

  try {
    const response = await fetch(url, {});
    const data = await response.json();

    return data.products.map((product) => {
      return <Card key={product.id} id={product.id} title={product.title} price={product.price} description={product.description} images={product.images[0]} />;
    });
  } catch (error) {
    return <p>Failed to load products. Please try again later.</p>;
  }
};

export default ProductList;
