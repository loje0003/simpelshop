import Image from "next/image";
import Link from "next/link";

const Card = ({ id, title, price, description, images }) => {
  return (
    <div>
      <div className="relative">
        <Link href={`/detailview/${id}`}>
          <Image src={images} alt="Product" width={300} height={200} />
        </Link>
      </div>
      <div>
        <h2>{title}</h2>
        <p>{price}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
