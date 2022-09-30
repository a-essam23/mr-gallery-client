// import { useState } from "react";
import { AlbumList, SwiperTemplate } from "..";

export default function RandomAlbumsPreview({ albums = [], size, showCode }) {
    // const [albums, setAlbums] = useState([]);
    // setAlbums([]);
    let albumsArr = [];
    let temp = [];
    for (let i = 0; i < size; i++) {
        if (albums[i]) {
            temp.push(albums[i]);
        } else {
            temp.push({
                imageUrl: "",
                folderName: "",
                code: i + 1,
            });
        }
        if (temp.length == 4) {
            albumsArr.push(temp);
            temp = [];
        }
    }
    // if (albums.length !== size) {
    //     const missing = size - albums.length;
    //     for (let i = 0; i < missing; i++) {
    //         albums[i] = {
    //             imageUrl: "",
    //             folderName: "",
    //             code: i + 1,
    //         };
    //     }
    // }

    // for (let i = 0; i < albums.length; i += 4) {
    //     albumsArr.push(albums.slice(i, i + 4));
    // }

    return (
        <SwiperTemplate
            pagination
            autoplay
            items={albumsArr.map((coll) => {
                return (
                    <div className="grid gap-4 grid-cols-2 md:grid-cols-4 p-4 mb-8 ">
                        <AlbumList
                            showCode={showCode}
                            AlbumClassName="h-64 sm:h-64 md:h-72 xl:h-96 2xl:h-144"
                            albums={coll}
                        />
                    </div>
                );
            })}
        />
    );
}
