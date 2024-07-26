import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from "next/image";
const Banner = () => {
    
  return (
    
   

<div id="slide1" className="carousel-item relative w-full h-[600px]">
    <img
      src="/shoe.png"
      className="w-full hidden sm:block"  />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <Link href="#slide4" className="btn btn-circle">❮</Link>
      <Link href="#slide2" className="btn btn-circle">❯</Link>
    </div>
  </div>
  )
}

export default Banner
