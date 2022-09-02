import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper";
import { v4 as uuidv4 } from "uuid";
import "swiper/css/bundle";

const imgs = [
    {
        key: uuidv4(),
        image: "https://i.pinimg.com/564x/cd/fe/fc/cdfefca135cf15f3f4d7695faee64686.jpg",
    },
    {
        key: uuidv4(),
        image: "https://i.pinimg.com/564x/fa/35/78/fa35786872df1910f5943713f1bbfeaa.jpg",
    },
    {
        key: uuidv4(),
        image: "https://i.pinimg.com/564x/24/7f/65/247f65295e2ed0f1ad3499917c67e2cd.jpg",
    },
];

function Newsreel() {
    return (
        <Swiper
            modules={[Autoplay, EffectCoverflow]}
            effect="coverflow "
            loop={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            spaceBetween={5}
            slidesPerView={1}
            className="flex-1"
        >
            {imgs.map((item) => {
                return (
                    <SwiperSlide key={item.key}>
                        <img
                            src={item.image}
                            alt={item.key}
                            className="object-cover w-full h-full"
                        />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}

export default Newsreel;
