import Link from "next/link";
import { TiShoppingCart } from "react-icons/ti";

const Heading = () => {
  return (
    <div className="flex items-center justify-between px-6 py-3 text-blue-950 sticky top-0 bg-white z-10 border-b border-blue-950">
      <Link href="/" className="cursor-pointer text-xl font-semibold">
        SimpleShop
      </Link>

      <div className="flex gap-6">
        <Link href="/productlist" className="cursor-pointer text-xl">
          Products
        </Link>
        <Link href="/cart" className="cursor-pointer">
          <div className="text-3xl">
            <TiShoppingCart />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Heading;
