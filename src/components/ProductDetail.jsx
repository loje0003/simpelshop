"use client";

import Image from "next/image";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { useCartStore } from "../store/cartStore";

const ProductDetail = ({ product, images, title }) => {
  const router = useRouter();
  const addToCart = useCartStore((state) => state.addToCart);
  return (
    <div className="space-y-8">
      <h1 className="text-7xl text-blue-950 mt-5">{product.title}</h1>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="relative w-full aspect-square bg-gray-100 rounded-2xl overflow-hidden">{images ? <Image src={images} alt={title} fill className="object-contain p-6" /> : <div className="flex items-center justify-center w-full h-full text-gray-500 text-sm">No image available</div>}</div>

        <div className="flex flex-col justify-between">
          <div className="space-y-6">
            <p className="text-2xl font-semibold">{product.price} kr</p>

            <p className="text-gray-600 leading-relaxed max-w-lg">{product.description}</p>
          </div>

          <div className="flex gap-4 mt-8">
            <Button className="bg-yellow-200 px-6 py-3  hover:bg-gray-100  transition" onClick={() => addToCart(product)}>
              Add to cart
            </Button>

            <Button className="bg-yellow-200 px-6 py-3 hover:bg-gray-100 transition" onClick={() => router.back()}>
              Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
