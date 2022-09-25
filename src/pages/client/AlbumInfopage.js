// import { Layout } from "../../layouts";
// import { AlbumInfo } from "../../components";
// import { getOneAlbum } from "../../services";
// import { useParams } from "react-router-dom";
// import { useState } from "react";
// import { useEffect } from "react";

// export default function AlbumInfopage() {
//     const location = useParams();
//     const [isLoading, setIsLoading] = useState(true);
//     const [album, setAlbum] = useState({});
//     useEffect(() => {
//         getOneAlbum(location.album)
//             .then((data) => {
//                 setIsLoading(false);
//                 setAlbum(data);
//             })
//             .catch((e) => {
//                 setIsLoading(false);
//             });
//     }, []);
//     return (
//         <Layout>
//             <AlbumInfo className="w-10/12 m-auto" data={album} />
//         </Layout>
//     );
// }
