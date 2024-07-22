"use client";
import { useEffect, useState } from "react";
import api from "@/utils/axiosInterceptors";
import Image from "next/image";
import Navbar, { NavbarDark } from "@/components/Navbar";
import Banner from "@/components/Banner";

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
    <Navbar/>
            
    <div className="flex flex-wrap w-full overflow-hidden rounded-xl bg-gradient-to-t from-slate-900 via-stone-900 to-gray-900 bg-clip-border text-gray-700 shadow-md justify-center">
   <Banner/>

      {products.slice(1, 7).map((item) => (
        <div className="card bg-gradient-to-r from-violet-200 to-pink-200 w-64 shadow-xl m-2 rounded-none">
          <figure className="px-2 pt-3">
            <img
              src={item.image}
              alt="Shoes"
              className="rounded-xl w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{item.title}</h2>
            <p className="line-clamp-2">{item.description}</p>
            <h1>$ {item.price}</h1>

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
