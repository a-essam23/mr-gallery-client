import { v4 } from "uuid";
import Album from "./Album";

function AlbumList({ albums }) {
    return (
        <>
            {albums.map((album) => (
                <Album key={v4()} data={album} />
            ))}
        </>
    );
}

export default AlbumList;
