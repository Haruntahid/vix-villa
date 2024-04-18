import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import { FaLocationDot } from "react-icons/fa6";

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
                className="w-full max-h-[700px] min-h-[300px] md:min-h-[500px] object-cover"
                src="https://i.ibb.co/85JBRVr/colonial-style-house-night-scene-1150-17925.jpg"
                alt=""
              />
              <div className="bg-white px-3 lg:px-10 py-3 lg:py-5 max-w-xl absolute top-1/2 left-[10%] rounded-3xl">
                <p className="lg:text-xl font-medium text-green-600 flex items-center gap-2">
                  <FaLocationDot size={18} />
                  Beverly Hills, California
                </p>
                <p className="text-xl lg:text-3xl font-semibold mt-3">
                  Grand Mansion Estate
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full relative">
              <img
                className="w-full max-h-[700px] min-h-[300px] md:min-h-[500px] object-cover"
                src="https://i.ibb.co/VxLXg7d/wide-angle-landscape-architectural-matrix-stunning-villa-with-swimming-pool-1409-5206.jpg"
                alt=""
              />
              <div className="bg-white px-3 lg:px-10 py-3 lg:py-5 max-w-xl absolute top-1/2 left-[10%] rounded-3xl">
                <p className="lg:text-xl font-medium text-green-600 flex items-center gap-2">
                  <FaLocationDot size={18} />
                  Maui, Hawaii
                </p>
                <p className="text-xl lg:text-3xl font-semibold mt-3">
                  Luxury Beachfront Villa
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full relative">
              <img
                className="w-full max-h-[700px] min-h-[300px] md:min-h-[500px] object-cover"
                src="https://i.ibb.co/tskvgLZ/photorealistic-wooden-house-with-timber-structure-23-2151302627.jpg"
                alt=""
              />
              <div className="bg-white px-3 lg:px-10 py-3 lg:py-5 max-w-xl absolute top-1/2 left-[10%] rounded-3xl">
                <p className="lg:text-xl font-medium text-green-600 flex items-center gap-2">
                  <FaLocationDot size={18} />
                  Maldives
                </p>
                <p className="text-xl lg:text-3xl font-semibold mt-3">
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
