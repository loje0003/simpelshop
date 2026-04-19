import Link from "next/link";
import Image from "next/image";

const Card = ({ id, title, price, description, images }) => {
  return (
    <div className="w-[300px] rounded-xl overflow-hidden shadow-md bg-white hover:shadow-lg transition">
      {/* Image */}
      <div className="relative w-full h-[200px]">
        <Link href={`/detailview/${id}`}>
          <Image src={images} alt={title} fill className="object-cover" />
        </Link>
      </div>

      {/* Content */}
      <div className="p-3">
        {/* Title + Price */}
        <div className="flex justify-between items-center mb-1">
          <h2 className="font-semibold text-gray-800 text-sm">{title}</h2>
          <p className="text-green-700 font-medium text-sm">{price}</p>
        </div>

        {/* Description */}
        <p className="text-gray-500 text-xs line-clamp-2">{description}</p>
      </div>
    </div>
  );
};

export default Card;
