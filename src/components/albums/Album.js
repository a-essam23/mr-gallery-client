import { Link } from "react-router-dom";
import { useState } from "react";
function Album({ data: { imageURL, code, folderName }, className }) {
    const [isHovering, setIsHovering] = useState(false);
    return (
        <Link
            to={`/collections/${folderName}/${code}`}
            className="flex w-full h-full relative transition-all rounded-3xl shadow-xl"
            onMouseLeave={() => setIsHovering(false)}
            onMouseOver={() => setIsHovering(true)}
        >
            <div>
                <img
                    src={imageURL}
                    alt={code}
                    className={
                        "object-cover w-full h-full hover:brightness-50  rounded-2xl"
                    }
                />
            </div>
            {isHovering && (
                <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 pointer-events-none  ">
                    <h3 className="text-white">{code}</h3>
                </div>
            )}
        </Link>
    );
}

export default Album;
