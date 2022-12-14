import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import { v4 } from "uuid";
import "swiper/css/bundle";

export default function SwiperTemplate({
    items,
    autoplay = false,
    showIndex = false,
    delay = 5000,
    className,
    pagination,
}) {
    return (
        <Swiper
            modules={[Autoplay, EffectCoverflow, Pagination]}
            effect="coverflow "
            loop={true}
            pagination={pagination}
            autoplay={
                autoplay
                    ? {
                          delay,
                          disableOnInteraction: false,
                      }
                    : false
            }
            spaceBetween={5}
            slidesPerView={1}
            className={`${className}`}
        >
            {items.map((item, i) => {
                return (
                    <SwiperSlide key={item._id || v4()}>
                        {item}
                        {showIndex && (
                            <span className="absolute top-0 left-0 p-2 text-xl bg-black text-white">
                                {i + 1}
                            </span>
                        )}
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}
