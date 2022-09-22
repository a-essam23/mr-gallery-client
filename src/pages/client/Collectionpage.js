import { Spin } from "antd";
import { useState, useEffect } from "react";
import { EmptyPlaceHolder } from "../../components";
import CollectionMosiac from "../../components/collections/CollectionMosiac";
import useQuery from "../../hooks/useQuery";
import { Layout } from "../../layouts";
import { getCollections, getOneGroup } from "../../services";

export default function Collectionpage() {
    const [collections, setCollections] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const query = useQuery();
    const group = query.get("group");
    useEffect(() => {
        group
            ? getOneGroup(group)
                  .then((data) => {
                      setIsLoading(false);
                      setCollections(data);
                  })
                  .catch((e) => {
                      setIsLoading(false);
                  })
            : getCollections()
                  .then((data) => {
                      setIsLoading(false);
                      setCollections(data);
                  })
                  .catch((e) => {
                      setIsLoading(false);
                  });
    }, []);
    return (
        <Layout>
            {isLoading && <Spin size="large" />}
            {collections.length > 0 ? (
                <CollectionMosiac collections={collections} />
            ) : (
                !isLoading && <EmptyPlaceHolder />
            )}
        </Layout>
    );
}
