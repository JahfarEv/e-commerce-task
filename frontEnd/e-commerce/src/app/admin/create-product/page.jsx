"use client";

import React, { useState } from "react";

import api from "@/utils/axiosInterceptors";
import { useRouter } from "next/navigation";
import Image from "next/image";
function Product() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  // create post function

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("image", image);
      formData.append("price", price);
      formData.append("quantity", quantity);

      console.log(title, description);
      const response = await api.post("/products/create", formData);
      if (response.status === 201) {
        router.push("/admin/dashboard");
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-gradient-to-t from-slate-900 via-stone-900 to-gray-900">
      <div className="flex items-center justify-center font-extrabold text-xl m-5 ">
        <h1 className="text-white mt-24">CREATE NEW PRODUCT</h1>
      </div>
      <div className="flex sticky items-center justify-center min-h-screen bg-gradient-to-t from-slate-900 via-stone-900 to-gray-900 dark:bg-gray-800">
        <form class="bg-gradient-to-r from-violet-200 to-pink-200 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg">
          <div class="mb-4" onChange={(e) => setTitle(e.target.value)}>
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Title
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Productname"
            />
          </div>
          <div class="mb-6" onChange={(e) => setDescription(e.target.value)}>
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Description
            </label>
            <textarea
              class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="text"
            />
          </div>
          <div class="mb-6" onChange={(e) => setPrice(e.target.value)}>
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Price
            </label>
            <input
              class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="number"
            />
          </div>
          <div class="mb-6" onChange={(e) => setQuantity(e.target.value)}>
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Quantity
            </label>
            <input
              class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="number"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Image
            </label>
            <input
              id="picture"
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleCreate}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Product;
