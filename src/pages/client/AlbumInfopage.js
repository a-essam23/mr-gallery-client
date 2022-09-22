import { Layout } from "../../layouts";
import { AlbumInfo } from "../../components";
import { getOneAlbum } from "../../services";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function AlbumInfopage() {
    const location = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [album, setAlbum] = useState({});
    useEffect(() => {
        getOneAlbum(location.album)
            .then((data) => {
                console.log(data);
                setIsLoading(false);
                setAlbum(data);
            })
            .catch((e) => {
                setIsLoading(false);
            });
    }, []);
    return (
        <Layout>
            <AlbumInfo
                className="w-10/12 m-auto h-64 sm:h-88 md:h-128 lg:h-144 xl:h-158 2xl:h-220"
                data={album}
            />
        </Layout>
    );
}
