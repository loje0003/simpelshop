import Image from "next/image";
import Button from "./Button";

const ProductDetail = ({ product, images, title }) => {
  return (
    <div>
      <div>{images ? <Image src={images} alt={title} fill /> : <div className="flex items-center justify-center w-full h-full text-gray-500 text-sm">No image available</div>}</div>

      <div>
        <div className="space-y-4">
          <h1>{product.title}</h1>
          <p>{product.price} kr</p>
          <p>{product.description}</p>
        </div>

        <div>
          <Button>LÆG I KURV</Button>
          <Button>Tilbage</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
