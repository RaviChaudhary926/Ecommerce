import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Swal from 'sweetalert2';
import Rating from '../components/Rating';

  


const ProductsDetails = () => {
  // const Swal = ('sweetalert2')
    const [products,setProducts] = useState({})
    const [qty, setQty] = useState(1)
    const paramsn = useParams()
    let pid = paramsn.product_id


      useEffect(() =>{
      axios.get(`https://dummyjson.com/products/${pid}`)
  .then(res => setProducts(res.data))
  .catch(err => console.log('Axios is not working.'))
   },[])
   const [thumbsSwiper, setThumbsSwiper] = useState(null)


   const decrease=()=>{
    if  (qty > 1){
      setQty(qty-1)
    }
    else{
      Swal.fire({
        title: "Info",
        icon: "info",
        text: "Minimum quantity must be 1.",
        draggable: true
      });
    }
   }
   


const addtocart=()=>{
  // get localstorage data if exist otherwise empty array

  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []

  // set object for product infomation

  const productsData = {
    id : products.id,
    title : products.title,
    category : products.category,
    quantity : qty,
    price : products.price,
    image : products.thumbnail,
    discount : products.discountPercentage
  }

  // check if the item is already exist or not

  const existingItem = cartItems.find((item)=>item.id === products.id)
  if (!existingItem){
    cartItems.push(productsData)
    localStorage.setItem('cartItems',JSON.stringify(cartItems))
    Swal.fire({
      title : "Success",
      icon : "Success",
      text : "Item Add to the cart.",
      draggable : true,
      timer : 3000
    });
  }
  else{
     Swal.fire({
  title: "Error!",
  icon: "error",
  text: "Item already exist.",
  draggable: true
  });
}
}
   

  return (
    <>
   
      <div className="container my-5">
        <p className="breadcrumb">
          <a href='/'className='text-dark me-1'>Home</a>/
          <a href='/products' className='text-dark mx-1'>Product</a>/
          <small className='text-secondary mx-1'>{products.category}</small>
          </p>
          <div className="d-md-flex justify-content-evenly  shadow py- rounded-4">
            <div className="col-md-4">

              <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
      </Swiper>

            </div>
            <div className="col-md-6">
            <h2 className='text-dark'>{products.title}</h2>
            <p><span className='fw-bold text-secondary'>Condition</span>: New Product</p>
            {
              products.rating && <Rating rate = {products.rating} />
            }
            <p className='text-secondary'>{products.desciption}</p>
            <hr/>
            <p className='text-secondary'><span className='fw-bold'>Size : </span>S | M | L</p>
            <p className='text-secondary fs-5'><span className='fw-bold'>Price : $ </span>
            <del>{products.price}</del>
            <span className='text-success ms-2'>{products.price}</span>
            </p>

            <p className='fw-bold mb-1'>Quantity :</p>
            <p className='d-flex'>
              <button className='btn bg-secondary-subtle rounded-end-0
               rounded-start-2' onClick={decrease}> - </button>
              <input type="text" value={qty} readOnly 
              className='form-control w-25 text-center rounde-center-0' />
              <button className='btn bg-secondary-subtle rounded-end-2
               rounded-start-0' onClick={()=>setQty(qty+1)}> + </button>
            </p>
            <div className="d-flex">
              <a href='#' className='btn btn-outline-success me-3'>Add to Wishlist</a>
              <a href='#' className='btn btn-warning' onClick={addtocart}>Add to Cart</a>
            </div>

            </div>
          </div>
    </div>
    </>
  )
}

export default ProductsDetails
