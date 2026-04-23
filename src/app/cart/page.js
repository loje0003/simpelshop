"use client";

import { useCartStore } from "../../store/cartStore";
import Card from "@/components/Card";
import Button from "@/components/Button";

export default function CartPage() {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  return (
    <div>
      <h1 className="text-7xl text-blue-950 mx-10 mt-5 mb-10">Shopping cart</h1>

      {cart.length === 0 ? (
        <p className="text-3xl text-gray-700 mx-10 mt-5 mb-10">Kurven er tom</p>
      ) : (
        <div className="flex flex-wrap gap-4 ml-10">
          {cart.map((item) => (
            <div key={item.id} className="relative">
              {/* Card */}
              <Card id={item.id} title={item.title} price={item.price} description={item.description} images={item.images} />

              {/* REMOVE BUTTON */}
              <button onClick={() => removeFromCart(item.id)} className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded hover:bg-red-700">
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      <div>
        <Button className="ml-10 mt-50 bg-yellow-200 px-6 py-3  hover:bg-gray-100 transition">Checkout</Button>
      </div>
    </div>
  );
}
