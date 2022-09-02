import { Layout } from "../../layouts";

import AlbumInfo from "../../components/albums/AlbumInfo";
const modelInfo = {
    image: "https://i.pinimg.com/564x/b2/d1/62/b2d162ea29182898b368da4c79f97919.jpg",
    description: "Tree Wind Fly Eat 328 Marble Red Blue Screen Tram",
    code: "23",
    width: "720",
    height: "1080",
    depth: "40",
};
export default function AlbumInfopage() {
    return (
        <Layout>
            <AlbumInfo
                className="w-10/12 m-auto h-64 sm:h-88 md:h-128 lg:h-144 xl:h-158 2xl:h-220"
                data={modelInfo}
            />
        </Layout>
    );
}
