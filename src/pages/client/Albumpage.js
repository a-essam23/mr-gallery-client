import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { AlbumList, EmptyPlaceHolder } from "../../components";
import { Layout } from "../../layouts";
import { getOneCollection } from "../../services";

export default function Albumpage() {
    const location = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        getOneCollection(location.collection)
            .then((data) => {
                setIsLoading(false);
                setAlbums(data);
            })
            .catch((e) => {
                setIsLoading(false);
            });
    }, []);
    return (
        <Layout>
            {albums.length > 0 ? (
                <section className="xl:pt-8 grid auto-rows-fr grid-cols-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                    <AlbumList albums={albums} />
                </section>
            ) : (
                !isLoading && <EmptyPlaceHolder />
            )}
        </Layout>
    );
}
