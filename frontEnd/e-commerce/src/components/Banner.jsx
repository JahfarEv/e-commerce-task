import React, { useEffect, useState } from 'react'

const Banner = () => {
    
  return (
    
   

<div id="slide1" className="carousel-item relative w-full h-[600px]">
    <img
      src="/shoe.png"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  )
}

export default Banner
