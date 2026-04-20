import ProductDetail from "@/components/DetailProduct";
import Image from "next/image";
import { Suspense } from "react";

const DetailView = ({ params }) => {
  return (
    <main className="min-h-screen bg-gray-50 py-5 px-10 md:px-12">
      <Suspense fallback={<div>Loading product details…</div>}>
        <FetchProductDetail params={params} />
      </Suspense>
    </main>
  );
};

const FetchProductDetail = async ({ params }) => {
  const { id } = await params;
  const response = await fetch(`https://dummyjson.com/products/${id}`, {});
  const product = await response.json();

  return <ProductDetail product={product} images={product.images[0]} title={product.title} />;
};

export default DetailView;
