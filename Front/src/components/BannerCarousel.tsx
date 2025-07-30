// src/components/BannerCarousel.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

interface BannerCarouselProps {
  images: string[];
}

export default function BannerCarousel({ images }: BannerCarouselProps) {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h1 className="flex items-center gap-2 text-xl font-bold text-orange-500 mb-3">
        <img src="../../assets/imageLogin.png" alt="Logo" className="w-6 h-6" />
        Bem-vindo à <span className="text-black">Elektro!</span>
      </h1>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="rounded-xl overflow-hidden"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={img}
              alt={`Banner ${idx + 1}`}
              className="w-full h-40 md:h-64 object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
