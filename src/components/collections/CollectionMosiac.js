import { Masonry, useInfiniteLoader } from "masonic";
import { useState } from "react";
import Collection from "./Collection";

export default function CollectionMosiac({ collections }) {
    const [items, setItems] = useState(collections);
    const maybeLoadMore = useInfiniteLoader(
        (startIndex, stopIndex, currentItems) => {
            const nextItems = collections.slice(startIndex, stopIndex);
            setItems((current) => [...current, ...nextItems]);
        },
        {
            isItemLoaded: (index, items) => !!items[index],
            minimumBatchSize: 10,
            threshold: 10,
        }
    );
    return (
        <Masonry
            columnGutter={16}
            columnWidth={245}
            items={items}
            render={Collection}
            // onRender={maybeLoadMore}
        />
    );
}
