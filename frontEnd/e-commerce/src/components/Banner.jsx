import React, { useEffect, useState } from 'react'

const Banner = () => {
    const [products,setProducts] = useState([])

    useEffect(() => {
        const fetchDatas = async () => {
          try {
            const response = await api.get("/products");
            setProducts(response.data.data);
            console.log(response.data.data);
          } catch (error) {
            console.log(error);
          }
        };
        fetchDatas();
      }, []);
  return (
    <div>
    
<div className="carousel carousel-end rounded-box bg-black">
   

  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
      alt="Drink" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
      alt="Drink" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
      alt="Drink" />
  </div>
  <div className="carousel-item">
    <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp" alt="Drink" />
  </div>
  <div className="carousel-item">
    <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" alt="Drink" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
      alt="Drink" />
  </div>
</div>

</div>
  )
}

export default Banner
