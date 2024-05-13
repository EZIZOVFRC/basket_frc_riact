import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

function Detail() {
  const { dataId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${dataId}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [dataId]);

  return (
    <>
      <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Description</th>
        </tr>
      </thead>

      </table>
      {product && (
        <tbody>
        <tr>
          <td><img className="amage" src={product.thumbnail} alt="" /></td>
          <td className="tidi">{product.description}</td>
        </tr>
        
      </tbody>
        
      )}
    </>
  );
}

export default Detail;

{
  /* <table >

  
</table> */
}
