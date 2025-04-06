import React, { useEffect, useState } from "react";

function Home() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const prodPerpage = 6;

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error(err));
  }, []);

  const indexLastpage = page * prodPerpage;
  const indexOfFirst = indexLastpage - prodPerpage;

  const filtered = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  const currProd = filtered.slice(indexOfFirst, indexLastpage);
  const TotalePage = Math.ceil(filtered.length / prodPerpage);

//  

  return (
    <div>
     
      <h2>Products</h2>
      <input
        type="text"
        placeholder="Search Products"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
      />
      <button>Search Products</button>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "5px",
        }}
      >
        {currProd.map((product) => (
          <div key={product.id} style={{ border: "2px solid black" }}>
            <img src={product.thumbnail} alt={product.title} />
            <h4>{product.title}</h4>
            <p>{product.price}</p>
            <p>Rating: {product.rating}</p>
          </div>
        ))}
      </div>

      <div>
        <button onClick={() => setPage((p) => p - 1)}>prev</button>
        <button onClick={() => setPage((p) => p + 1)}>Next</button>
      </div>
    </div>
  );
}
export default Home;
