import { AlbumList } from "../../components";
import { getAlbums } from "../../services/getAlbums";

function RandomAlbumsPreview() {
    const albums = getAlbums();
    return (
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-4 ">
            <AlbumList albums={albums.slice(0, 4)} />
        </div>
    );
}

export default RandomAlbumsPreview;
