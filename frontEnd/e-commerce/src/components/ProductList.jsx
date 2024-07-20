"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import api from "@/utils/axiosInterceptors";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchDatas = async () => {
      try {
        const response = await api.get("/products");
        setProducts(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDatas();
  }, []);
  return (
    <div className="flex flex-wrap w-full overflow-hidden rounded-xl bg-gray-200 bg-clip-border text-gray-700 shadow-md justify-center mt-24">
      {products.map((item) => (
      
        <div className="card bg-base-200 w-96 shadow-xl rounded-none m-2">
          <figure className="px-10 pt-10">
            <img
              src={item.image}
              alt="Shoes"
              className="rounded-xl w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{item.title}</h2>
            <p>{item.description}</p>
            <div className="card-actions">
            <Link href={`/product/${item._id}`}>
              <button className="btn btn-primary rounded-none">Buy Now</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
