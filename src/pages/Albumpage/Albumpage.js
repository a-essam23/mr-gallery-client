import { AlbumList } from "../../components";
import { Layout } from "../../layouts";
import { getAlbums } from "../../services/getAlbums";

function Albumpage() {
    const albums = getAlbums();
    return (
        <Layout>
            <section className="grid auto-rows-fr grid-cols-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                <AlbumList albums={albums} />
            </section>
        </Layout>
    );
}

export default Albumpage;
