"use client";

import React, { useState } from "react";

import api from "@/utils/axiosInterceptors";
import { useParams, useRouter } from "next/navigation";
function EditProduct() {
  const { id } = useParams();
  console.log(id);
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  // edit product function

  const handleCreate = async (e) => {
    e.preventDefault(id);
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("image", image);
      formData.append("price", price);
      formData.append("quantity", quantity);

      console.log(title, description);
      const response = await api.put(`/products/update/${id}`, formData);
      if (response.status === 200) {
        router.push("/admin/dashboard");
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center font-extrabold text-xl m-5">
        <h1>EDIT PRODUCT</h1>
      </div>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-t from-slate-900 via-stone-900 to-gray-900 dark:bg-gray-800">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg">
          <div class="mb-4" onChange={(e) => setTitle(e.target.value)}>
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Title
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="product name"
              type="text"
              placeholder="Product name"
            />
          </div>
          <div class="mb-6" onChange={(e) => setDescription(e.target.value)}>
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="description"
            >
              Description
            </label>
            <input
              class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="description"
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
    </>
  );
}
export default EditProduct;
