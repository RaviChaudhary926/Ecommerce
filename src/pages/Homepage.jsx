import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import Slider from '../components/Slider'
import Card from '../components/Card';
import axios from 'axios';

const Homepage = () => {
  const [products,setProducts] = useState([])

  axios.get('https://dummyjson.com/products')
  .then(res => setProducts(res.data.products))
  .catch(err => console.log('Axios is not working.'))



  return (
    <>
   <Slider/>

   {/* start of mini-carousel */}
   <div className="mini-carousel" id="mini-carousel">
     <Swiper
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/images/i1.png" alt="headphone" width={"120"} className='mini-carousel'/>
        </SwiperSlide>
        <SwiperSlide>
           <img src="/images/i2.png" alt="headphone" width={"90"} className='mini-carousel' />
        </SwiperSlide>
        <SwiperSlide>
           <img src="/images/i3.png" alt="headphone" width={"80"} className='mini-carousel' />
        </SwiperSlide>
        <SwiperSlide>
           <img src="/images/i4.png" alt="headphone" width={"100"} className='mini-carousel'/>
        </SwiperSlide>
        <SwiperSlide>
           <img src="/images/i5.png" alt="headphone" width={"70"} className='mini-carousel'/>
        </SwiperSlide>
        <SwiperSlide>
           <img src="/images/i6.png" alt="headphone" width={"70"} className='mini-carousel'/>
        </SwiperSlide>
        <SwiperSlide>
           <img src="/images/i7.png" alt="headphone" width={"70"} className='mini-carousel'/>
        </SwiperSlide>
        <SwiperSlide>
           <img src="/images/i8.png" alt="headphone" width={"70"} className='mini-carousel'/>
        </SwiperSlide>
        <SwiperSlide>
           <img src="/images/i9.png" alt="headphone" width={"70"} className='mini-carousel'/>
        </SwiperSlide>
      </Swiper>
   </div>
   {/* End of mini-carousel */}

   {/* Trending Products */}
   <div className="px-5 my-5" id='products'>
    <h2>Trending Items</h2>
    <hr/>
    <div className="d-md-flex justify-content-evenly flex-wrap">
      {
        products .slice(0,5).map((items,i)=>(
          <Card data = {items} key={i}/>
        ))
      }
      
    </div>
    <p className='text-end'><a href='/products' className='btn btn-warning'>All Products<i className='bi bi-arrow-right'></i></a></p>
   </div>
   {/* End of Trending Products */}

    </>
  )
}

export default Homepage
