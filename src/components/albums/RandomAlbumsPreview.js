// import { useState } from "react";
import { AlbumList, SwiperTemplate } from "..";

export default function RandomAlbumsPreview({ collections = [], size }) {
    // const [albums, setAlbums] = useState([]);
    // setAlbums([]);
    let collArr = [];
    if (collections.length !== size) {
        const missing = size - collections.length;
        for (let i = 0; i < missing; i++) {
            collections[i] = {
                imageUrl: "",
                folderName: "",
                code: i + 1,
            };
        }
    }
    for (let i = 0; i < collections.length; i += 4) {
        collArr.push(collections.slice(i, i + 4));
    }
    return (
        <SwiperTemplate
            pagination
            autoplay
            items={collArr.map((coll) => {
                return (
                    <div className="grid gap-4 grid-cols-2 md:grid-cols-4 p-4  ">
                        <AlbumList
                            AlbumClassName="h-64 sm:h-64 md:h-72 xl:h-96 2xl:h-144"
                            albums={coll}
                        />
                    </div>
                );
            })}
        />
    );
}
