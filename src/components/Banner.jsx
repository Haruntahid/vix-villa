import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";

function Banner() {
  return (
    <>
      <div data-aos="fade-down">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          <SwiperSlide>
            <div className="w-full relative">
              <img
                className="w-full max-h-[700px] object-cover"
                src="https://i.ibb.co/0cL13cx/outdoor-patio-1.jpg"
                alt=""
              />
              <div className="bg-white px-10 py-5 max-w-xl absolute top-1/2 left-[10%] rounded-3xl">
                <p className="text-xl font-medium">Miami Beach, Florida</p>
                <p className="text-3xl font-semibold">
                  Oceanfront Penthouse Paradise
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full relative">
              <img
                className="w-full max-h-[700px] object-cover"
                src="https://i.ibb.co/VxLXg7d/wide-angle-landscape-architectural-matrix-stunning-villa-with-swimming-pool-1409-5206.jpg"
                alt=""
              />
              <div className="bg-white px-10 py-5 max-w-xl absolute top-1/2 left-[10%] rounded-3xl">
                <p className="text-xl font-medium">Maui, Hawaii</p>
                <p className="text-3xl font-semibold">
                  Luxury Beachfront Villa
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full relative">
              <img
                className="w-full max-h-[700px] object-cover"
                src="https://i.ibb.co/tskvgLZ/photorealistic-wooden-house-with-timber-structure-23-2151302627.jpg"
                alt=""
              />
              <div className="bg-white px-10 py-5 max-w-xl absolute top-1/2 left-[10%] rounded-3xl">
                <p className="text-xl font-medium">Maldives</p>
                <p className="text-3xl font-semibold">
                  Tropical Resort Retreat
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Banner;
