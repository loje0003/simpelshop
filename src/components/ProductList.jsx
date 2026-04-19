import Card from "./Card";

const BreedList = ({ searchParams }) => {
  return (
    <div className="grid grid-cols-2">
      <FetchBreed searchParams={searchParams} />
    </div>
  );
};

const FetchBreed = async ({ searchParams }) => {
  "use server";
  const { query } = await searchParams;
  const url = query ? `https://dummyjson.com/products/search?q=${query}` : "https://dummyjson.com/products";
  try {
    const response = await fetch(url, {
      headers: {
        "x-api-key": "https://dummyjson.com/products",
      },
    });
    const breeds = await response.json();

    return breeds.map((products) => {
      return (
        <div key={products.id}>
          <Card id={products.id} title={products.title} price={products.price} description={products.description} images={products.images} />
        </div>
      );
    });
  } catch (error) {
    return <p>Failed to load breeds. Please try again later.</p>;
  }
};

export default BreedList;
