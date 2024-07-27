"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchProducts } from "@/redux/feachures/productSlice";
import { useDispatch, useSelector } from "react-redux";
import img from '../../public/Shoe.png'
const FeaturedProducts = () => {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);
  const isLoading = useSelector((state) => state.products.isLoading);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      setUser(token);
    }

    dispatch(fetchProducts());
  }, [dispatch]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      

      <div className="flex flex-wrap w-full overflow-hidden rounded-xl bg-gradient-to-t from-slate-900 via-stone-900 to-gray-900 bg-clip-border text-gray-700 shadow-md justify-center">
        <div
          id="slide1"
          className="carousel-item relative h-[600px] w-full hidden sm:block"
        >
          <img src={img} className="w-full" />
        </div>

        {products.slice(1, 7).map((item,index) => (
          <div key={index||item.id} className="card bg-gradient-to-r from-violet-200 to-pink-200 w-64 shadow-xl m-2 rounded-none mt-10 ">
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

              <button className="btn btn-primary rounded-none">
                {user ? (
                  <Link href={`/product/${item._id}`}>More info</Link>
                ) : (
                  <Link href="/login">More info</Link>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeaturedProducts;
