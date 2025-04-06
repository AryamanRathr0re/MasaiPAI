import React, { useEffect, useState } from "react";

function Home() {
  const [products, setProducts] = useState([]);
  const [page, setpage] = useState(1);
  const prodPerpage = 6;

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error(err));
  }, []);
  const indexLastpage = page * prodPerpage;
  const indexOfFirst = indexLastpage - prodPerpage;
  const currProd = products.slice(indexOfFirst, indexLastpage);
  const TotalePage = Math.ceil(products.length / prodPerpage);

  return (
    <div>
      <h2>Products</h2>
      <div>
        {currProd.map((product) => {
          <div key={prodPerpage.id}>
            <img src="{product.thumbnail}" alt="{product.title}" />
            <h4>{product.title}</h4>
            <p>{product.price}</p>
            <p>Rating: {product.rating}</p>
          </div>;
        })}
      </div>

      <div>
        <button onClick={() => setpage((p) => p - 1)}>prev</button>
        <button onClick={() => setpage((p) => p + 1)}>Next</button>
      </div>
    </div>
  );
}
export default Home;
