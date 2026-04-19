import { IoSearchOutline } from "react-icons/io5";

const Search = ({ searchParam }) => {
  return (
    <form className="flex items-center gap-4 px-5 mt-4 mb-4">
      <button type="submit" className="flex items-center justify-center min-w-14 min-h-14 rounded-full bg-lime-300">
        <IoSearchOutline className="text-green-900 text-2xl" />
      </button>
      <input type="search" name="query" placeholder="search products" className="w-full max-w-xl h-14 px-6 rounded-full border border-gray-900 bg-gray-100 placeholder-gray-400 focus:outline-none " />
    </form>
  );
};

export default Search;
