import { Spin } from "antd";
import { useEffect } from "react";
import { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { Navigation, Pagination } from "swiper";
import "swiper/css/bundle";

import { Swiper, SwiperSlide } from "swiper/react";
import { v4 } from "uuid";
import {
    Album,
    AlbumInfo,
    EmptyPlaceHolder,
    Searchbar,
} from "../../components";
import { Layout } from "../../layouts";
import { getOneCollection } from "../../services";

export default function Albumpage() {
    const location = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const [isLoading, setIsLoading] = useState(true);
    const [albums, setAlbums] = useState([]);
    const [isShown, setIsShown] = useState(false);
    const [slideIndex, setSlideIndex] = useState(1);
    const model = searchParams.get("model");

    useEffect(() => {
        getOneCollection(location.collection)
            .then((data) => {
                console.log("model", model, decodeURI(model));
                setIsLoading(false);

                if (model && decodeURI(model).length > 0) {
                    const modelData = data.find(
                        (album) => album.code === model
                    );
                    setAlbums([modelData]);
                } else {
                    setAlbums(data);
                }
            })
            .catch((e) => {
                setIsLoading(false);
            }); // eslint-disable-next-line
    }, [searchParams]);

    return (
        <Layout>
            <Searchbar
                choices={["model"]}
                onFinish={(data) => {
                    setSearchParams({ [data.type]: data.value });
                }}
            />
            {isLoading && <Spin size="large" />}
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
                            swiper.slideTo(slideIndex, 0);
                        }}
                        navigation
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination, Navigation]}
                        className="bg-white rounded-3xl  m-auto z-30 fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 max-h-full h-auto w-11/12 sm:w-9/12 md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12 "
                    >
                        {albums.map((album) => (
                            <SwiperSlide
                                key={album._id}
                                className="py-6 px-8 xl:py-8 xl:px-16 m-auto"
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
