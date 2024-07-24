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
      <Navbar />
      <div className="card lg:card-side bg-base-100 shadow-xl px-5 m-5 mt-12 lg:mt-24">
        <figure className="w-full lg:w-1/2">
          <img src={product.image} alt="Album" className="w-full h-auto object-cover" />
        </figure>
        <div className="card-body w-full lg:w-1/2">
          <h2 className="card-title text-lg lg:text-2xl">{product.title}</h2>
          <p className="text-sm lg:text-base">{product.description}</p>
          <div className="card-actions justify-end mt-4">
            <button className="btn btn-primary w-full lg:w-auto">Buy now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
