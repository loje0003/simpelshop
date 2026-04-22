"use client";

import { useCartStore } from "../store/cartStore";

export default function Kurv({ product }) {
  const addToCart = useCartStore((state) => state.addToCart);

  return <button onClick={() => addToCart(product)}>Add to cart</button>;
}
