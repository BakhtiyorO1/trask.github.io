import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./headerc.css";
import { Pagination, Navigation } from "swiper";
import {AiFillApple} from 'react-icons/ai'
import {AiFillAndroid} from 'react-icons/ai'
import { useSpring, animated } from '@react-spring/web';
export default function HeaderC() {
  const styles = useSpring({
    loop: true,
    from: { opacity: '0' },
    to: { opacity: '1' },
    config: { duration: '2000' },
  });

  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="Swiper"
      >
        <SwiperSlide><img src="https://mytrask.ru/wp-content/uploads/2022/12/ed3815dad47675c97de78835eef88074-1536x1152.png" alt=""/></SwiperSlide>
        <SwiperSlide><img src="https://mytrask.ru/wp-content/uploads/2022/12/c185b4dc0d1b3ef9c81b805d366f4e60-1-1536x1152.png" alt=""/></SwiperSlide>
        <SwiperSlide><img src="https://mytrask.ru/wp-content/uploads/2022/12/745be0573c1a5ab3ccb0f3d960372407-1536x1152.png" alt=""/></SwiperSlide>
        <SwiperSlide><img src="https://mytrask.ru/wp-content/uploads/2022/12/a3add6a8dc5573bdf64ba7959400947d-1536x1152.png" alt=""/></SwiperSlide>
      </Swiper>
      <div className="asxa">
      <h4>Доступно для:</h4>
        <h3><AiFillApple className="icons"/>
        <AiFillAndroid className="icons"/></h3>
      </div>
    </div>
  );
}
