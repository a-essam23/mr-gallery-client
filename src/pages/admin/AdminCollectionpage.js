import { Button } from "antd";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { v4 } from "uuid";
import {
    AlbumWithOptions,
    CollectionWithOptions,
    CustomForm,
    EmptyPlaceHolder,
    Grid,
    Searchbar,
} from "../../components";
import { AdminLayout } from "../../layouts";
import { getOneCollection } from "../../services";

export default function AdminGrouppage() {
    const mylocation = useParams();
    const [albums, setAlbums] = useState([]);
    const [isShown, setIsShown] = useState(false);
    const [collectionSelection, setCollectionSelection] = useState("");
    // const [collections, setCollections] = useState([])
    // collections = collections.map((collection) => ({
    //     ...collection,
    //     url: collection.folderName,
    // }));

    useEffect(() => {
        getOneCollection(mylocation.collection).then((data) => {
            setAlbums(data);
        });
    }, [mylocation.collection]);
    return (
        <AdminLayout>
            {isShown && (
                <CustomForm
                    selectedCollection={mylocation.collection}
                    selection="model"
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
                        setIsShown(true);
                    }}
                >
                    Add Model
                </Button>
            </div>
            {albums.length == 0 && <EmptyPlaceHolder />}
            <Grid>
                {/* {collections.map((collection) => (
                    <AlbumWithOptions
                        key={v4()}
                        data={collection}
                        onClickDelete={() => {}}
                    />
                ))} */}
            </Grid>
        </AdminLayout>
    );
}
