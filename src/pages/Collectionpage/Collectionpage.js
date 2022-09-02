import CollectionMosiac from "../../components/collections/CollectionMosiac";
import { Layout } from "../../layouts";
import { getCollections } from "../../services/getCollections";

function Collectionpage() {
    const collections = getCollections();
    return (
        <Layout>
            <CollectionMosiac collections={collections} />
            <div className="grid auto-rows-fr grid-cols-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-4"></div>
        </Layout>
    );
}

export default Collectionpage;
