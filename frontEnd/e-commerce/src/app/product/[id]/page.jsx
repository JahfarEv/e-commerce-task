"use client"
import api from "@/utils/axiosInterceptors";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const ProductDetail = () => {
  const{ id }= useParams()
  const [product,setProduct] = useState([]);

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
    <div className="flex items-center justify-center h-screen mt-24 mb-48">
      <div className="flex flex-wrap w-3/4 align-middle overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md justify-center mt-24 max-md:mt-1">
        <div className="w-full p-2  cursor-pointer">
          <img
            className="w-full h-96 object-cover mt-5 max-sm:h-26 max-md:mt-5"
            src={product?.image}
            alt="Products"
          />
          <div class="p-6">
            <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              {product?.title}
            </h4>
            <div>
              <p className="block mt-3 font-sans text-lg antialiased font-normal leading-relaxed text-gray-700 text-left max-sm:text-xs">
                {product?.description}
              </p>
            </div>
            
            {/* <button
              onClick={handleDelete}
              className="bg-red-800 text-white p-2 m-2 mt-3"
            >
              DELETE
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
