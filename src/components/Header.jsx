import Link from "next/link";

const Heading = () => {
  return (
    <div className="flex items-center justify-between px-6 py-3 text-green-900">
      <p className="text-lg font-semibold">SimpleShop</p>

      <div className="flex gap-6">
        <Link href="/cart" className="cursor-pointer">
          Cart
        </Link>
        <Link href="/productlist" className="cursor-pointer">
          Products
        </Link>
      </div>
    </div>
  );
};

export default Heading;
