// import Image from "next/image";
// import Button from "./Button";

// const ProductDetail = ({ product, images, title }) => {
//   return (
//     <div>
//       <div>{images ? <Image src={images} alt={title} fill /> : <div className="flex items-center justify-center w-full h-full text-gray-500 text-sm">No image available</div>}</div>

//       <div>
//         <div className="space-y-4">
//           <h1>{product.title}</h1>
//           <p>{product.price} kr</p>
//           <p>{product.description}</p>
//         </div>

//         <div>
//           <Button>LÆG I KURV</Button>
//           <Button>Tilbage</Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;
import Image from "next/image";
import Button from "./Button";

const ProductDetail = ({ product, images, title }) => {
  return (
    <div className="space-y-8">
      <h1 className="text-6xl text-blue-950 mt-5">{product.title}</h1>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="relative w-full aspect-square bg-gray-100 rounded-2xl overflow-hidden">{images ? <Image src={images} alt={title} fill className="object-contain p-6" /> : <div className="flex items-center justify-center w-full h-full text-gray-500 text-sm">No image available</div>}</div>

        <div className="flex flex-col justify-between">
          <div className="space-y-6">
            <p className="text-2xl font-semibold">{product.price} kr</p>

            <p className="text-gray-600 leading-relaxed max-w-lg">{product.description}</p>
          </div>

          <div className="flex gap-4 mt-8">
            <Button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition">LÆG I KURV</Button>

            <Button className="border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-100 transition">Tilbage</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
