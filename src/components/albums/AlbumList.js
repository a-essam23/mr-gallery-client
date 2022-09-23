import { v4 } from "uuid";
import Album from "./Album";

function AlbumList({ albums, className, onClick }) {
    console.log(albums);
    return (
        <>
            {albums.map((album) => (
                <Album
                    key={v4()}
                    data={album}
                    className={className}
                    onClick={onClick}
                />
            ))}
        </>
    );
}

export default AlbumList;
