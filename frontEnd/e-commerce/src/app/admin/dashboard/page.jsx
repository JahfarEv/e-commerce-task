"use client";
import api from "@/utils/axiosInterceptors";
import Link from "next/link";
import { useEffect, useState } from "react";

const page = () => {
  const [products, setProducts] = useState([]);

// fetch products

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products");
        setProducts(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  //delete product

  const handleDelete = async (id) => {
    try {
      const response = await api.delete(`/products/delete/${id}`);
      if (response.status === 200) {
        setProducts(products.filter((product) => product._id !== id));
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800">
      <div className="w-full max-w-4xl overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 table-auto">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Products
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Image
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex justify-between items-center">
                  <span>Action</span>
                  <Link href={"/admin/create-product"}>
                    <button className="p-2 ml-2 text-white bg-green-600 rounded-md whitespace-nowrap">
                      NEW
                    </button>
                  </Link>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {products.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <h1 className="badge badge-ghost badge-sm">{item.title}</h1>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={item.image} alt={item.title} />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="badge badge-ghost badge-sm">
                    {item.description}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{item.price}</td>
                <td className="px-6 py-4 whitespace-nowrap flex gap-2">
                  <Link href={`/admin/edit/${item._id}`}>
                    <button className="btn btn-ghost btn-xs bg-blue-700 text-white rounded-none">
                      Edit
                    </button>
                  </Link>
                  <button
                    className="btn btn-ghost btn-xs bg-red-600 text-white rounded-none"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
