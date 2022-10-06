import { Spin } from "antd";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
        const result = await getReq(queryVal)
            .then((data) => {
                setIsLoading(false);
                return data;
            })
            .catch((e) => {
                setIsLoading(false);
                return [];
            });
        return result;
    };

    useEffect(() => {
        if (group && decodeURI(group).length > 0) {
            handleSearch(group, getOneGroup, setIsLoading).then((data) => {
                setCollections(data);
            });
        } else if (collection && decodeURI(collection).length > 0) {
            handleSearch(collection, searchOneCollection, setIsLoading).then(
                (data) => {
                    setCollections(data);
                }
            );
        } else if (model && decodeURI(model).length > 0) {
            handleSearch(model, getOneAlbum, setIsLoading).then((data) => {
                if (data) {
                    setCollections(
                        data?._id
                            ? [
                                  {
                                      folderName: data.folderName,
                                      folderCover: data.folderCover,
                                  },
                              ]
                            : []
                    );
                } else {
                    setCollections(data);
                }
            });
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
                <div className="flex gap-4">
                    <div className="rounded border-2 text-xl p-8 grid grid-cols-1 justify-center">
                        {collections.map((coll) => {
                            return (
                                <Link
                                    to={coll.folderName}
                                    className="cursor-pointer"
                                >
                                    {coll.folderName}
                                </Link>
                            );
                        })}
                    </div>
                    <CollectionMosiac collections={collections} />
                </div>
            ) : (
                !isLoading && <EmptyPlaceHolder />
            )}
        </Layout>
    );
}
