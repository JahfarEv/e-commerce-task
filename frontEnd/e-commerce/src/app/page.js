"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import api from "@/utils/axiosInterceptors";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const homepage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchDatas = async () => {
      try {
        const response = await api.get("products");
        setProducts(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDatas();
  }, []);
  return (
    <>
      <Navbar />
    <div className="flex flex-wrap w-full overflow-hidden rounded-xl bg-gray-200 bg-clip-border text-gray-700 shadow-md justify-center mt-24">
    <div className="relative w-full h-64 md:h-96 mb-5">
            <Image
                src="/new-banner.png"
                layout="fill"
                objectFit="cover"
                alt="Picture"
                className="w-full h-full"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-white text-2xl md:text-4xl font-bold">Featured Products</h1>
            </div>
        </div>

      {products.slice(2, 7).map((item) => (
        <div className="card bg-base-100 w-96 shadow-xl m-2 rounded-none">
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
              <button className="btn btn-primary rounded-none">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default homepage;
