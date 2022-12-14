import { Link } from "react-router-dom";
export default function FourBoxPattern({
    className,
    activeLink = false,
    groups = [],
}) {
    // if (groups.length !== size) {
    //     const missing = size - groups.length;
    //     for (let i = 0; i < missing; i++) {
    //         groups[i] = {
    //             imageUrl: "",
    //             folderName: "",
    //             code: i + 1,
    //         };
    //     }
    // }

    return (
        <div className={"flex flex-1 gap-4 w-full h-full " + className}>
            <div className="flex flex-col gap-4 w-full h-full">
                <Link
                    to={groups[0] ? groups[0].link : "/"}
                    onClick={(e) => {
                        !activeLink && e.preventDefault();
                    }}
                    className={`w-full h-full flex-grow basis-2/5 min-h-0 bg-contain bg-white shadow-cd relative`}
                    style={
                        groups[0] && {
                            background: `url('${groups[0].imageCover}')`,
                            backgroundSize: "cover",
                        }
                    }
                >
                    <div
                        className={`transparent-white absolute top-1/4 left-2/4 -translate-x-2/4 m-auto`}
                    >
                        <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold text-center">
                            {groups[0] && groups[0].name.toUpperCase()}
                        </h1>
                    </div>
                </Link>
                <Link
                    to={groups[1] ? groups[1].link : "/"}
                    onClick={(e) => {
                        !activeLink && e.preventDefault();
                    }}
                    className={`w-full h-full flex-grow basis-3/5 min-h-0 bg-white shadow-cd relative`}
                    style={
                        groups[1] && {
                            background: `url('${groups[1].imageCover}')`,
                            backgroundSize: "cover",
                        }
                    }
                >
                    <div
                        className={`transparent-white absolute top-1/4 left-2/4 -translate-x-2/4 m-auto`}
                    >
                        <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold text-center">
                            {groups[1] && groups[1].name.toUpperCase()}
                        </h1>
                    </div>
                </Link>
            </div>
            <div className="flex flex-col gap-4 w-full h-full">
                <Link
                    to={groups[2] ? groups[2].link : "/"}
                    onClick={(e) => {
                        !activeLink && e.preventDefault();
                    }}
                    className={`w-full h-full flex-grow basis-3/5 min-h-0 bg-white shadow-cd relative`}
                    style={
                        groups[2] && {
                            background: `url('${groups[2].imageCover}')`,
                            backgroundSize: "cover",
                        }
                    }
                >
                    <div
                        className={`transparent-white absolute top-1/4 left-2/4 -translate-x-2/4 m-auto`}
                    >
                        <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold text-center">
                            {groups[2] && groups[2].name.toUpperCase()}
                        </h1>
                    </div>
                </Link>
                <Link
                    to={groups[3] ? groups[3].link : "/"}
                    onClick={(e) => {
                        !activeLink && e.preventDefault();
                    }}
                    className={`w-full h-full flex-grow basis-2/5 min-h-0 bg-white shadow-cd relative`}
                    style={
                        groups[3] && {
                            background: `url('${groups[3].imageCover}')`,
                            backgroundSize: "cover",
                        }
                    }
                >
                    <div
                        className={`transparent-white absolute top-1/4 left-2/4 -translate-x-2/4 m-auto`}
                    >
                        <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold text-center">
                            {groups[3] && groups[3].name.toUpperCase()}
                        </h1>
                    </div>
                </Link>
            </div>
        </div>
    );
}
