import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

// Images
import BannerImg1 from '../../assets/banner-1.png';
import BannerImg2 from '../../assets/banner-2.png';
import BannerImg3 from '../../assets/banner-3.png';
import BannerImg4 from '../../assets/banner-4.png';
import MobileBanner1 from '../../assets/mobilBanner1.png';
import MobileBanner2 from '../../assets/mobileBanner2.png';
import MobileBanner3 from '../../assets/mobileBanner3.png';
import MobileBanner4 from '../../assets/mobileBanner4.png';

const Banner = () => {
  const [isMobile, setIsMobile] = useState(false);
  const images = [BannerImg1, BannerImg2, BannerImg3, BannerImg4];
  // Mobile banners

  const mobileImages = [
    MobileBanner1,
    MobileBanner2,
    MobileBanner3,
    MobileBanner4,
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // sm এর নিচে হলে mobile ধরলাম
    };

    handleResize(); // প্রথমবার রান করাও
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full sm:max-w-7xl mx-auto ">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="sm:rounded-2xl"
      >
        {(isMobile ? mobileImages : images).map((img, index) => (
          <SwiperSlide key={index}>
            <img className="banner-img" src={img} alt={`Banner ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
