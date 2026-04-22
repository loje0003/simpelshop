"use client";

import { useCartStore } from "@/store/cartStore";

const Kurv = () => {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  if (cart.length === 0) {
    return <p>Din kurv er tom</p>;
  }

  return (
    <div>
      {cart.map((item) => (
        <div key={item.id} className="border p-3 mb-2">
          <h2>{item.title}</h2>
          <p>{item.price} kr</p>
          <p>Antal: {item.quantity}</p>

          <button onClick={() => removeFromCart(item.id)}>Fjern</button>
        </div>
      ))}
    </div>
  );
};

export default Kurv;
