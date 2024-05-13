import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../../App.css";

function Store() {
  const [products, setProducts] = useState([]);
  const [my_filter, setmy_filter] = useState("");
  const [searchFrc, setsearchFrc] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const Change = (e) => {
    setmy_filter(e.target.value);
  };

  const Search = (e) => {
    setsearchFrc(e.target.value);
  };

  const filteredProducts = () => {
    let filtered = [...products];
    if (my_filter === "boyukden") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (my_filter === "kicikden") {
      filtered.sort((a, b) => a.price - b.price);
      Search;
    }

    if (searchFrc) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchFrc.toLowerCase())
      );
    }

    return filtered;
  };

  return (
    <section>
      <input
        type="text"
        placeholder="Search Products..."
        value={searchFrc}
        onChange={Search}
      />
      <select name="" id="" onChange={Change}>
        <option value="">Default</option>
        <option value="boyukden">Boyukden kiciye</option>
        <option value="kicikden">Kicikden Boyuye</option>
      </select>
      <div className="tp">
        <h2>New released Products for Women</h2>
        <span>Who are in extremely love with eco friendly system.</span>
      </div>
      <div className="bttm">
        {filteredProducts()
          .slice(0, 3)
          .map((product) => (
            <div key={product.id} className="card">
              <img src={product.thumbnail} alt={product.title} />
              <span>{product.title}</span>
              <span>
                <b>{product.price} $ </b>
              </span>
              <button>Add to basket</button>
              <button>
                <Link to={`/detail/${product.id}`}>Detail</Link>
              </button>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Store;
