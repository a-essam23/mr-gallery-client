import previewBG from "../../../assets/previewbg.jpg";

import { useEffect } from "react";
import { useState } from "react";
import {
    RandomAlbumsPreview,
    SwiperTemplate,
    FourBoxPattern,
    About,
    Contact,
} from "../../../components";
import { Layout } from "../../../layouts";
import { getAlbums, getGroups } from "../../../services";
// import ReactPlayer from "react-player";

export default function Homepage() {
    const [groups, setGroups] = useState([]);
    const [albums, setAlbums] = useState([]);
    function importAll(r) {
        let images = {};
        r.keys().forEach((item, index) => {
            images[item.replace("./", "")] = r(item);
        });
        return images;
    }
    const images = importAll(
        require.context(
            "../../../assets/customers",
            false,
            /\.(png|jpe?g|svg)$/
        )
    );

    const sliderImages = importAll(
        require.context("../../../assets/slider", false, /\.(png|jpe?g|svg)$/)
    );

    useEffect(() => {
        getGroups()
            .then((data) => {
                const groupsParsed = data.map((group) => {
                    return {
                        ...group,
                        link: `/collections/?group=${group.name}`,
                    };
                });

                setGroups(groupsParsed);
            })
            .catch((e) => {});
        getAlbums(`?pages=1&limit=16`)
            .then((data) => {
                setAlbums(data);
            })
            .catch((e) => {});
    }, []);

    return (
        <Layout>
            <section className="w-full h-full gap-4 sm:flex sm:h-96 md:h-120 xl:h-144 2xl:h-216">
                <SwiperTemplate
                    autoplay
                    delay={2000}
                    className="sm:basis-3/5 h-96 sm:h-full w-full shadow-cd"
                    items={Object.values(sliderImages).map((img) => {
                        return (
                            <img
                                src={img}
                                alt="slide1"
                                className="w-full h-full bg-cover"
                            />
                        );
                    })}
                />
                <FourBoxPattern
                    groups={groups}
                    activeLink
                    className="my-12 h-120 sm:h-full sm:my-0 sm:basis-2/5 "
                />
            </section>
            <section className="text-3xl 2xl:text-2xl text-center tracking-widest">
                LATEST WORKS
            </section>
            <section>
                <RandomAlbumsPreview
                    // showCode={false}
                    albums={albums}
                    size={16}
                />
            </section>
            <About
                card={{
                    title: "Roman Classic",
                    description:
                        "High quality RTV silicon moulds. Shipping to every part of the world. ",
                    previewImg: previewBG,
                }}
                imageList={Object.values(images)}
            />
            <Contact />
        </Layout>
    );
}
