import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useNavigate, createSearchParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";

const CarouselCategory = () => {

  const navigate = useNavigate();

  const searchCategory = (category) => {
    navigate({
      pathname: "search",
      search: `${createSearchParams({
        category: `${category}`,
        searchTerm: ``,
      })}`,
    });
  };

  return (
    <div className="bg-white m-">
      <div className="text-2xl fontsemibold p-3">Shop by Category</div>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
      >
        <SwiperSlide onClick={() => searchCategory("Deals")} className="cursor-pointer">
          <img src={"../images/category_0.jpg"} alt="" />
        </SwiperSlide>
        <SwiperSlide onClick={() => searchCategory("Amazon")} className="cursor-pointer">
          <img src={"../images/category_1.jpg"} alt="" />
        </SwiperSlide>
        <SwiperSlide onClick={() => searchCategory("Fashion")} className="cursor-pointer">
          <img src={"../images/category_2.jpg"} alt="" />
        </SwiperSlide>
        <SwiperSlide onClick={() => searchCategory("Computers")} className="cursor-pointer">
          <img src={"../images/category_3.jpg"} alt="" />
        </SwiperSlide>
        <SwiperSlide onClick={() => searchCategory("Home")} className="cursor-pointer">
          <img src={"../images/category_4.jpg"} alt="" />
        </SwiperSlide>
        <SwiperSlide onClick={() => searchCategory("Mobiles")} className="cursor-pointer">
          <img src={"../images/category_5.jpg"} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarouselCategory;
