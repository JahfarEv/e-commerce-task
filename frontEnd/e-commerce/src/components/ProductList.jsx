// "use client";
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import api from "@/utils/axiosInterceptors";

//   const [products, setProducts] = useState([]);

//   useEffect(() => {
  //     const fetchDatas = async () => {
    //       try {
      //         const response = await api.get("/products");
      //         setProducts(response.data.data);
      //         console.log(response.data.data);
      //       } catch (error) {
        //         console.log(error);
        //       }
        //     };
        //     fetchDatas();
        //   }, []);
        
        "use client"
import { addProduct, deleteProduct } from '@/redux/feachures/productSlice'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '@/redux/feachures/productSlice'

const Products = () => {
  const [title, setTitle] = useState('')
  const [description,setDescription] = useState('')
  const dispatch = useDispatch()
  const data = useSelector((state) => state.data);
console.log(data);
  useEffect(()=>{
dispatch(fetchProducts())
  },[])
 




          
  return (
    <div className="flex flex-wrap w-full overflow-hidden rounded-xl bg-gradient-to-t from-slate-900 via-stone-900 to-gray-900 bg-clip-border text-gray-700 shadow-md justify-center">
      {data.map((item) => (
      
        <div className="card bg-gradient-to-r from-violet-200 to-pink-200 w-64 shadow-xl rounded-none m-2 mt-24">
          <figure className="px-3 pt-3">
            <img
              src={item.image}
              alt="Shoes"
              className="rounded-xl w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{item.title}</h2>
            <p className="line-clamp-2">{item.description}</p>
            <h2 className="card-title">$ {item.price}</h2>
            <div className="card-actions">
            <Link href={`/product/${item._id}`}>
              <button className="btn btn-primary rounded-none">More info</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Products;
