import { Masonry, useInfiniteLoader } from "masonic";
import { useState } from "react";
import Collection from "./Collection";

export default function CollectionMosiac({ collections, amount = 10 }) {
    const [items, setItems] = useState([]);

    const maybeLoadMore = useInfiniteLoader(
        (startIndex, stopIndex, currentItems) => {
            try {
                console.log("CUTTING");
                const nextItems = collections.slice(startIndex, stopIndex);
                setItems((current) => [...current, ...nextItems]);
            } catch (e) {
                console.log(e);
            }
        },
        {
            isItemLoaded: (index, items) => !!items[index],
            minimumBatchSize: amount,
            threshold: amount,
        }
    );

    return collections.length > amount ? (
        <Masonry
            columnGutter={16}
            columnWidth={245}
            items={items}
            render={Collection}
            onRender={maybeLoadMore}
        />
    ) : (
        <Masonry
            columnGutter={16}
            items={collections}
            columnWidth={245}
            render={Collection}
        />
    );
}
