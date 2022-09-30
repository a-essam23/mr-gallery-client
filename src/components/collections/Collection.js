import { Link } from "react-router-dom";

function Collection({ data: { folderName = "", imageCover, url = "" } }) {
    return (
        <Link
            to={url || `/collections/${folderName}`}
            className="flex w-full h-full relative bg-slate-50 transition-all rounded-2xl flex-col"
        >
            <img
                src={imageCover}
                alt={folderName}
                className="object-cover w-full h-full hover:brightness-75 rounded-2xl"
            />

            <div className="flex pointer-events-none rounded-2xl p-2 max-w-full">
                <div className="text-black text-xl  overflow-clip ">
                    {folderName.toUpperCase()}
                </div>
            </div>
        </Link>
    );
}

export default Collection;
