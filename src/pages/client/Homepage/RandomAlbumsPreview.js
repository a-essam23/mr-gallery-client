import { useState } from "react";
import { AlbumList } from "../../../components";
import { getAlbums } from "../../../services";

export default function RandomAlbumsPreview() {
    const [albums, setAlbums] = useState([]);
    return (
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-4 ">
            <AlbumList albums={albums} />
        </div>
    );
}
