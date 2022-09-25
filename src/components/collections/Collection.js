import { Link } from "react-router-dom";

function Collection({ data: { folderName, imageCover, url, images } }) {
    return (
        <Link
            to={url || `/collections/${folderName}`}
            className="flex w-full h-full relative transition-all shadow-md rounded-2xl"
        >
            <img
                src={imageCover}
                alt={folderName}
                className="object-cover w-full h-full hover:brightness-50 rounded-2xl"
            />

            <div className="absolute top-0 left-0 pointer-events-none bg-black opacity-75 rounded-2xl p-2 ">
                <h3 className="text-white text-2xl">
                    {folderName.toUpperCase()}
                </h3>
            </div>
        </Link>
    );
}

export default Collection;
