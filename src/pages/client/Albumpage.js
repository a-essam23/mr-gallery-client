import { useState } from "react";
import { AlbumList, EmptyPlaceHolder } from "../../components";
import { Layout } from "../../layouts";
import { getAlbums } from "../../services";

export default function Albumpage() {
    const [albums, setAlbums] = useState([]);
    // const albums = getAlbums();
    return (
        <Layout>
            <section className="grid auto-rows-fr grid-cols-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                {albums.length > 0 ? (
                    <AlbumList albums={albums} />
                ) : (
                    <EmptyPlaceHolder />
                )}
            </section>
        </Layout>
    );
}
