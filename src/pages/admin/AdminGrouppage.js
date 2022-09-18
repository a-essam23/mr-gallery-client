import { Button } from "antd";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { v4 } from "uuid";
import {
    CollectionWithOptions,
    CustomForm,
    Grid,
    Searchbar,
} from "../../components";
import { AdminLayout } from "../../layouts";
import { getOneGroup } from "../../services";

// let collections = [
//     {
//         images: [],
//         _id: "631cb0e30da27c9ed079b71f",
//         folderName: "AB",
//         imageCover:
//             "https://i.pinimg.com/564x/16/20/70/1620701dc548351544098080a7711112.jpg",
//     },
//     {
//         images: [],
//         _id: "631cb1990da27c9ed079b72a",
//         folderName: "AA",
//         imageCover:
//             "https://i.pinimg.com/564x/95/c6/1e/95c61e7f08be9e6a5d73e389ff861748.jpg",
//     },
//     {
//         images: [],
//         _id: "631cb0e30da27c9ed079b71f",
//         folderName: "AB",
//         imageCover:
//             "https://i.pinimg.com/564x/16/20/70/1620701dc548351544098080a7711112.jpg",
//     },
//     {
//         images: [],
//         _id: "631cb1990da27c9ed079b72a",
//         folderName: "AA",
//         imageCover:
//             "https://i.pinimg.com/564x/95/c6/1e/95c61e7f08be9e6a5d73e389ff861748.jpg",
//     },
//     {
//         images: [],
//         _id: "631cb0e30da27c9ed079b71f",
//         folderName: "AB",
//         imageCover:
//             "https://i.pinimg.com/564x/16/20/70/1620701dc548351544098080a7711112.jpg",
//     },
//     {
//         images: [],
//         _id: "631cb1990da27c9ed079b72a",
//         folderName: "AA",
//         imageCover:
//             "https://i.pinimg.com/564x/95/c6/1e/95c61e7f08be9e6a5d73e389ff861748.jpg",
//     },
//     {
//         images: [],
//         _id: "631cb0e30da27c9ed079b71f",
//         folderName: "AB",
//         imageCover:
//             "https://i.pinimg.com/564x/16/20/70/1620701dc548351544098080a7711112.jpg",
//     },
//     {
//         images: [],
//         _id: "631cb1990da27c9ed079b72a",
//         folderName: "AA",
//         imageCover:
//             "https://i.pinimg.com/564x/95/c6/1e/95c61e7f08be9e6a5d73e389ff861748.jpg",
//     },
//     {
//         images: [],
//         _id: "631cb0e30da27c9ed079b71f",
//         folderName: "AB",
//         imageCover:
//             "https://i.pinimg.com/564x/16/20/70/1620701dc548351544098080a7711112.jpg",
//     },
//     {
//         images: [],
//         _id: "631cb1990da27c9ed079b72a",
//         folderName: "AA",
//         imageCover:
//             "https://i.pinimg.com/564x/95/c6/1e/95c61e7f08be9e6a5d73e389ff861748.jpg",
//     },
// ];

export default function AdminGrouppage() {
    const mylocation = useParams();
    const [isShown, setIsShown] = useState(false);
    const [collections, setCollections] = useState([]);
    const [modelSelection, setModelSelection] = useState("collection");
    const [collectionSelection, setCollectionSelection] = useState("");
    // const [collections, setCollections] = useState([])
    // collections = collections.map((collection) => ({
    //     ...collection,
    //     url: collection.folderName,
    // }));

    useEffect(() => {
        getOneGroup(mylocation.group).then((data) => {
            setCollections(data);
        });
    }, [mylocation.group, isShown]);
    return (
        <AdminLayout>
            {isShown && (
                <CustomForm
                    selectedCollection={collectionSelection}
                    selection={modelSelection}
                    onClickHandler={() => {
                        setIsShown(false);
                    }}
                />
            )}
            <div className="flex items-center">
                <Searchbar></Searchbar>
                <Button
                    type="primary"
                    size="large"
                    className="bg-blue-600 mr-8 2xl:mr-16"
                    onClick={() => {
                        setModelSelection("collection");
                        setIsShown(true);
                    }}
                >
                    Add Collection
                </Button>
            </div>
            <Grid>
                {collections.map((collection) => (
                    <CollectionWithOptions
                        key={v4()}
                        data={collection}
                        onClickAdd={() => {
                            console.log("model selected");
                            setModelSelection("model");
                            setCollectionSelection(collection.folderName);
                            setIsShown(true);
                        }}
                        onClickDelete={() => {}}
                    />
                ))}
            </Grid>
        </AdminLayout>
    );
}
