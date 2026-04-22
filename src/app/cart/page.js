"use client";

import { useCartStore } from "@/store/cartStore";

const CartPage = () => {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  return (
    <div>
      <h1>Cart</h1>

      {cart.length === 0 && <p>Din kurv er tom</p>}

      {cart.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.price} kr</p>
          <p>Antal: {item.quantity}</p>

          <button onClick={() => removeFromCart(item.id)}>Fjern</button>
        </div>
      ))}
    </div>
  );
};

export default CartPage;
