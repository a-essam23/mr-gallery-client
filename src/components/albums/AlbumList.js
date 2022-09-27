import { v4 } from "uuid";
import Album from "./Album";

function AlbumList({ albums, AlbumClassName, onClick }) {
    return (
        <>
            {albums.map((album) => (
                <Album
                    key={v4()}
                    data={album}
                    className={AlbumClassName}
                    onClick={onClick}
                />
            ))}
        </>
    );
}

export default AlbumList;
