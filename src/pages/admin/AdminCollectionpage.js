import { Button, Spin } from "antd";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { v4 } from "uuid";
import {
    AlbumWithOptions,
    CustomForm,
    EmptyPlaceHolder,
    Grid,
} from "../../components";
import AuthContext from "../../context/AuthProvider";
import { AdminLayout } from "../../layouts";
import { getOneCollection } from "../../services";
import deleteOneAlbum from "../../services/albums/deleteOneAlbum";

export default function AdminCollectionPage() {
    const authContext = useContext(AuthContext);
    const mylocation = useParams();
    const [isShown, setIsShown] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [albums, setAlbums] = useState([]);
    // eslint-disable-next-line
    const [isUpdate, setIsUpdate] = useState(null);

    const handleDelete = async (code) => {
        setIsLoading(true);
        deleteOneAlbum(code, authContext.token)
            .then(() => {
                setIsLoading(false);
            })
            .catch(() => {
                setIsLoading(false);
            });
    };

    useEffect(() => {
        setIsLoading(true);
        getOneCollection(mylocation.collection).then((data) => {
            setIsLoading(false);
            setAlbums(data);
        });
    }, [mylocation.collection]);

    return (
        <AdminLayout>
            {isShown && (
                <CustomForm
                    update={isUpdate}
                    selectedCollection={mylocation.collection}
                    selection={"model"}
                    onClickHandler={() => {
                        setIsShown(false);
                        setIsUpdate(null);
                    }}
                />
            )}

            <div className="flex items-center justify-between p-4">
                <div></div>
                {isLoading && <Spin size="large" className="absolute" />}
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

            {albums.length === 0 && <EmptyPlaceHolder />}

            <Grid className="p-4">
                {albums.map((album) => (
                    <AlbumWithOptions
                        key={v4()}
                        data={album}
                        onClickDelete={() => handleDelete(album.code)}
                        onClickEdit={() => {
                            setIsUpdate(album);
                        }}
                    />
                ))}
            </Grid>
        </AdminLayout>
    );
}
