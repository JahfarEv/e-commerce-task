"use client";
import api from "@/utils/axiosInterceptors";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  // get product by id

  useEffect(() => {
    const fetchDatas = async () => {
      try {
        const response = await api.get(`/products/${id}`);
        setProduct(response.data.data.products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDatas();
  }, []);

  return (
    <>
    <Navbar/>
    <div className="card lg:card-side bg-base-100 shadow-xl px-5 m-5 mt-24">
    
  <figure>
    <img
      src={product.image}
      alt="Album" 
        className="w-96 h-90"
      />
  </figure>
  <div className="card-body object-cover w-96">
    <h2 className="card-title">{product.title}</h2>
    <p>{product.description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy now</button>
    </div>
  </div>
</div>
</>
  );
};

export default ProductDetail;
