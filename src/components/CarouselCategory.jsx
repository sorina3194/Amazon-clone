import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const CarouselCategory = () => {
  return (
    <div className="bg-white m-">
      <div className="text-2xl fontsemibold p-3">Shop by Category</div>
      <Swiper slidesPerView={5} spaceBetween={10} navigation={true} modules={[Navigation]}>
        <SwiperSlide>
          <img src={'../images/category_0.jpg'} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={'../images/category_1.jpg'} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={'../images/category_2.jpg'} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={'../images/category_3.jpg'} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={'../images/category_4.jpg'} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={'../images/category_5.jpg'} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default CarouselCategory
