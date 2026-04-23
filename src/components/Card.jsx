import Link from "next/link";
import Image from "next/image";

const Card = ({ id, title, price, description, images }) => {
  return (
    <div className="w-60 rounded-xl overflow-hidden shadow bg-white hover:shadow-lg transition">
      {/* Image */}
      <div className="relative w-full h-50">
        <Link href={`/detailview/${id}`}>{images && (Array.isArray(images) ? images[0] : images) ? <Image src={Array.isArray(images) ? images[0] : images} alt={title} fill className="object-cover" /> : <div className="flex items-center justify-center w-full h-full text-sm">No image available</div>}</Link>
      </div>

      <div className="p-3">
        <div className="flex justify-between items-center mb-1">
          <h2 className="font-semibold text-gray-800 text-sm">{title}</h2>
          <p className="text-green-700 font-medium text-sm">{price}</p>
        </div>

        <p className="text-gray-500 text-xs line-clamp-2">{description}</p>
      </div>
    </div>
  );
};

export default Card;
