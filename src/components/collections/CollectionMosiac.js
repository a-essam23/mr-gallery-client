import { Masonry, useInfiniteLoader } from "masonic";
import { useEffect } from "react";
import { useState } from "react";
import Collection from "./Collection";

export default function CollectionMosiac({ collections }) {
    const [items, setItems] = useState([]); // eslint-disable-next-line
    const [isDone, setIsDone] = useState(false);

    useEffect(() => {
        if (collections.length <= 10) {
            setItems(collections);
            setIsDone(true);
        } else {
            const nextItems = collections.slice(0, 10);
            setItems(nextItems);
        } // eslint-disable-next-line
    }, []);
    // eslint-disable-next-line
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
