import Category from "@/components/Category";
import Search from "@/components/Search";
import ProductList from "@/components/ProductList";

const ProductList = () => {
  return (
    <div>
      <h1 className="text-7xl text-blue-950 mx-10 mt-5">All Products</h1>
      <div className="flex justify-between mr-40">
        <Category />
        <Search />
        <ProductList />
      </div>
    </div>
  );
};

export default ProductList;
