import { Link } from "react-router-dom";
import { useState } from "react";
function Album({ data: { imageUrl, code, folderName }, className, onClick }) {
    const [isHovering, setIsHovering] = useState(false);
    return (
        <Link
            to={`/collections/${folderName}/${code}`}
            className={`${className} flex w-full h-full relative transition-all shadow-xl hover:scale-105 `}
            onMouseLeave={() => setIsHovering(false)}
            onMouseOver={() => setIsHovering(true)}
            onClick={onClick}
        >
            <div className="w-full h-full">
                <img
                    src={imageUrl}
                    alt={code}
                    className={"object-cover w-full h-full"}
                />
            </div>
            {!isHovering && (
                <div className="absolute top-0 left-0 bg-black opacity-75 p-4 pointer-events-none ">
                    <h3 className="text-white font-bold text-2xl">{code}</h3>
                </div>
            )}
        </Link>
    );
}

export default Album;
