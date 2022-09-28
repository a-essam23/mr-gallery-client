import { Alert, Button, Spin } from "antd";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { v4 } from "uuid";
import {
    CollectionWithOptions,
    CustomForm,
    EmptyPlaceHolder,
    Grid,
} from "../../components";
import AuthContext from "../../context/AuthProvider";
import { AdminLayout } from "../../layouts";
import { deleteOneCollection, getOneGroup } from "../../services";

export default function AdminGrouppage() {
    const authContext = useContext(AuthContext);
    const mylocation = useParams();
    const [isShown, setIsShown] = useState(false);
    const [collections, setCollections] = useState([]);
    const [modelSelection, setModelSelection] = useState("collection");
    const [collectionSelection, setCollectionSelection] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [msg, setMsg] = useState(null);
    const handleDelete = async (folderName) => {
        setIsLoading(true);
        setMsg(null);
        deleteOneCollection(folderName, authContext.token)
            .then(() => {
                setIsLoading(false);
                setMsg(
                    <Alert
                        message="Collection deleted!"
                        type="success"
                        showIcon
                        closable
                    />
                );
            })
            .catch((e) => {
                setIsLoading(false);
                setMsg(
                    <Alert
                        message="Delete failed"
                        type="error"
                        showIcon
                        closable
                    />
                );
            });
    };

    useEffect(() => {
        setIsLoading(true);
        getOneGroup(mylocation.group).then((data) => {
            setCollections(data);
            setIsLoading(false);
        });
    }, [mylocation.group, msg]);
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
            <div className="flex flex-1 items-center justify-between p-4">
                <div />
                {msg}
                {isLoading && <Spin size="large" className="" />}

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
            {collections.length > 0 ? (
                <Grid className="p-4">
                    {collections.map((collection) => (
                        <CollectionWithOptions
                            key={v4()}
                            data={collection}
                            onClickAdd={() => {
                                setModelSelection("model");
                                setCollectionSelection(collection.folderName);
                                setIsShown(true);
                            }}
                            onClickDelete={() => {
                                console.log("deleting");
                                handleDelete(collection.folderName);
                            }}
                        />
                    ))}
                </Grid>
            ) : (
                !isLoading && <EmptyPlaceHolder />
            )}
        </AdminLayout>
    );
}
