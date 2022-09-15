import { useState } from "react";
import { Link } from "react-router-dom";

function Collection({ data: { imageCover, folderName, url } }) {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <Link
            to={url || `/collections/${folderName}`}
            className="flex w-full h-full relative transition-all shadow-md rounded-2xl"
            onMouseLeave={() => setIsHovering(false)}
            onMouseOver={() => setIsHovering(true)}
        >
            <img
                src={imageCover}
                alt={folderName}
                className="object-cover w-full h-full hover:brightness-50 rounded-2xl"
            />
            {isHovering && (
                <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 pointer-events-none ">
                    <h3 className="text-white">{folderName}</h3>
                </div>
            )}
        </Link>
    );
}

export default Collection;
