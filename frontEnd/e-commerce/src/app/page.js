"use client";
import { useEffect, useState } from "react";
import api from "@/utils/axiosInterceptors";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const homepage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchDatas = async () => {
      try {
        const response = await api.get("products");
        setProducts(response.data.data);
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
    <div id="slide1" className="carousel-item relative h-[600px] w-full hidden sm:block">
    <img
      src="/shoe.png"
      className="w-full"  />
      </div>
   
      {products.slice(1, 7).map((item) => (
        <div className="card bg-gradient-to-r from-violet-200 to-pink-200 w-64 shadow-xl m-2 rounded-none mt-10">
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

            <Link href={`/product/${item._id}`}>
                <button className="btn btn-primary rounded-none">
                  More info
                </button>
              </Link>
          </div>
        </div>
      ))}
      </div>
  
    </>
  );
};

export default homepage;
