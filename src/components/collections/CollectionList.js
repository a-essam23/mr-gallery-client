import { v4 as uuidv4 } from "uuid";
import Collection from "./Collection";

function CollectionList({ collections }) {
    return (
        <>
            {collections.map((collection) => (
                <Collection key={uuidv4()} data={collection} />
            ))}
        </>
    );
}

export default CollectionList;
