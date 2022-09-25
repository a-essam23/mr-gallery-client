// import { useState } from "react";
import { AlbumList } from "../../../components";

export default function RandomAlbumsPreview() {
    // const [albums, setAlbums] = useState([]);
    // setAlbums([]);
    return (
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-4 ">
            <AlbumList albums={[]} />
        </div>
    );
}
