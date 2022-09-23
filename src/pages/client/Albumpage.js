import { CaretRightFilled, CaretLeftFilled } from "@ant-design/icons";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css/bundle";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { v4 } from "uuid";
import {
    Album,
    AlbumInfo,
    AlbumList,
    EmptyPlaceHolder,
} from "../../components";
import { Layout } from "../../layouts";
import { getOneCollection } from "../../services";

export default function Albumpage() {
    const location = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [albums, setAlbums] = useState([]);
    const [isShown, setIsShown] = useState(false);
    const [slideIndex, setSlideIndex] = useState(1);

    useEffect(() => {
        getOneCollection(location.collection)
            .then((data) => {
                setIsLoading(false);
                setAlbums(data);
            })
            .catch((e) => {
                setIsLoading(false);
            });
    }, [location.collection]);
    return (
        <Layout>
            {isShown && (
                <>
                    <div
                        className="fixed bg-black opacity-50 w-screen h-screen left-0 top-0 cursor-pointer z-20 "
                        onClick={() => {
                            setIsShown(false);
                        }}
                    ></div>
                    <div></div>
                    <Swiper
                        onSwiper={(swiper) => {
                            console.log(slideIndex);
                            swiper.slideTo(slideIndex, 0);
                        }}
                        navigation
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination, Navigation]}
                        className="z-30 fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-11/12 sm:w-8/12 m-auto h-3/6 md:h-4/6 xl:h-5/6 lg:w-8/12 xl:w-7/12 bg-white rounded-3xl"
                    >
                        {albums.map((album) => (
                            <SwiperSlide
                                key={album._id}
                                className="py-6 px-8 xl:py-8 xl:px-16"
                            >
                                <AlbumInfo
                                    data={album}
                                    className="w-full h-full"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </>
            )}
            {albums.length > 0 ? (
                <section className="xl:pt-8 grid auto-rows-fr grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                    {albums.map((album, i) => (
                        <Album
                            key={v4()}
                            data={album}
                            onClick={(e) => {
                                e.preventDefault();
                                setIsShown(true);
                                setSlideIndex(i);
                            }}
                        />
                    ))}
                </section>
            ) : (
                !isLoading && <EmptyPlaceHolder />
            )}
        </Layout>
    );
}
