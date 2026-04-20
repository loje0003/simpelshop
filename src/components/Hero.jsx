import Button from "./Button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col pt-100">
      <h1 className="text-9xl font-semibold text-yellow-200 mx-10">SIMPEL SHOP</h1>
      <div className="mx-10 my-5">
        <Link hhref="/productlist">
          <Button>View Products</Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
