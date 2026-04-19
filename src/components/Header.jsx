const Heading = () => {
  return (
    <div className="flex items-center justify-between px-6 py-3 text-green-900">
      <p className="text-lg font-semibold">SimpleShop</p>

      <div className="flex gap-6">
        <p className="cursor-pointer">Cart</p>
        <p className="cursor-pointer ">Products</p>
      </div>
    </div>
  );
};

export default Heading;
