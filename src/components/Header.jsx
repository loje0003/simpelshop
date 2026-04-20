import Link from "next/link";

const Heading = () => {
  return (
    <div className="flex items-center justify-between px-6 py-3 text-blue-950">
      <Link href="/" className="cursor-pointer text-lg font-semibold">
        SimpleShop
      </Link>

      <div className="flex gap-6">
        <Link href="/cart" className="cursor-pointer">
          Cart
        </Link>
        <Link href="/productlist" className="cursor-pointer">
          Products
        </Link>
      </div>
      <hr />
    </div>
  );
};

export default Heading;
