import { Button } from "antd";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { v4 } from "uuid";
import {
    CollectionWithOptions,
    CustomForm,
    EmptyPlaceHolder,
    Grid,
    Searchbar,
} from "../../components";
import { AdminLayout } from "../../layouts";
import { getOneGroup } from "../../services";

export default function AdminGrouppage() {
    const mylocation = useParams();
    const [isShown, setIsShown] = useState(false);
    const [collections, setCollections] = useState([]);
    const [modelSelection, setModelSelection] = useState("collection");
    const [collectionSelection, setCollectionSelection] = useState("");

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
            {collections.length === 0 && <EmptyPlaceHolder />}
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
