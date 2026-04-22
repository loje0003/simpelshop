"use client";

import { useCartStore } from "../store/cartStore";
import Card from "@/components/Card";

export default function CartPage() {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  return (
    <div>
      <h1>Cart</h1>

      {cart.length === 0 ? (
        <p>Kurven er tom</p>
      ) : (
        <div className="flex flex-wrap gap-4">
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
    </div>
  );
}
