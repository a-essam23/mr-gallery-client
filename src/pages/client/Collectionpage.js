import { Spin } from "antd";
import { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { EmptyPlaceHolder, Searchbar } from "../../components";
import CollectionMosiac from "../../components/collections/CollectionMosiac";
import { Layout } from "../../layouts";
import {
    getCollections,
    getOneAlbum,
    getOneGroup,
    searchOneCollection,
} from "../../services";

export default function Collectionpage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [collections, setCollections] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();

    let group = searchParams.get("group");
    let collection = searchParams.get("collection");
    let model = searchParams.get("model");
    ////////////// TODO ::: ADD SEARCH BAR

    const handleSearch = async (queryVal, getReq, setIsLoading) => {
        const collections = await getReq(queryVal)
            .then((data) => {
                setIsLoading(false);
                return data;
            })
            .catch((e) => {
                setIsLoading(false);
                return [];
            });
        return collections;
    };

    useEffect(() => {
        if (group) {
            handleSearch(group, getOneGroup, setIsLoading).then((data) => {
                setCollections(data);
            });
        } else if (collection) {
            handleSearch(
                collection,
                searchOneCollection,
                setIsLoading,
                setCollections
            ).then((data) => {
                setCollections(data);
            });
        } else if (model) {
            handleSearch(model, getOneAlbum(model), setIsLoading).then(
                (data) => {
                    setCollections([
                        {
                            folderName: data.folderName,
                            folderCover: data.folderCover,
                        },
                    ]);
                }
            );
        } else if (!location.search) {
            handleSearch(null, getCollections, setIsLoading).then((data) => {
                setCollections(data);
            });
        } // eslint-disable-next-line
    }, [location.search]);

    return (
        <Layout>
            <Searchbar
                choices={["collection", "model"]}
                onFinish={(data) => {
                    setSearchParams({ [data.type]: data.value });
                }}
            />
            {isLoading && <Spin size="large" />}
            {collections.length > 0 ? (
                <CollectionMosiac collections={collections} />
            ) : (
                !isLoading && <EmptyPlaceHolder />
            )}
        </Layout>
    );
}
