import Navbar from '@/components/Navbar'
import Products from '@/components/ProductList'
import React from 'react'

const page = () => {
  return (
    <div>
    <Navbar/>
      <Products/>
    </div>
  )
}

export default page

// "use client"
// import { addProduct, deleteProduct } from '@/redux/feachures/productSlice'
// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { fetchProducts } from '@/redux/feachures/productSlice'

// const Products = () => {
//   const [title, setTitle] = useState('')
//   const [description,setDescription] = useState('')
//   const dispatch = useDispatch()
//   const products = useSelector((state)=>state.products)

//   useEffect(()=>{
// dispatch(fetchProducts())
//   },[])
//   console.log(products);
//   return (
//     <div>
//       products
//     </div>
//   )
// }

// export default Products

