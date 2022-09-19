import { Link } from "react-router-dom";
import classes from "./GroupsPreview.module.css";
export default function GroupsPreview({ className }) {
    return (
        <div className={"flex flex-1 gap-4 w-full h-full " + className}>
            <div className="flex flex-col gap-4 w-full h-full">
                <Link
                    to={`/collections?group=3dmodels`}
                    className={`${classes.img1} w-full h-full flex-grow basis-2/5 min-h-0 bg-white shadow-cd relative`}
                >
                    <div
                        className={`${classes.transparent} absolute top-1/4 left-2/4 -translate-x-2/4 m-auto`}
                    >
                        <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold text-center">
                            3D MODELS
                        </h1>
                    </div>
                </Link>
                <Link
                    to={`/collections?group=molds`}
                    className={`${classes.img2} w-full h-full flex-grow basis-3/5 min-h-0 bg-white shadow-cd relative`}
                >
                    <div
                        className={`${classes.transparent} absolute top-1/4 left-2/4 -translate-x-2/4 m-auto`}
                    >
                        <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold text-center">
                            MOLDS
                        </h1>
                    </div>
                </Link>
            </div>
            <div className="flex flex-col gap-4 w-full h-full">
                <Link
                    to={`/collections?group=models`}
                    className={`${classes.img3} w-full h-full flex-grow basis-3/5 min-h-0 bg-white shadow-cd relative`}
                >
                    <div
                        className={`${classes.transparent} absolute top-1/4 left-2/4 -translate-x-2/4 m-auto`}
                    >
                        <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold text-center">
                            MODELS
                        </h1>
                    </div>
                </Link>
                <Link
                    to={`/collections?group=projects`}
                    className={`${classes.img4} w-full h-full flex-grow basis-2/5 min-h-0 bg-white shadow-cd relative`}
                >
                    <div
                        className={`${classes.transparent} absolute top-1/4 left-2/4 -translate-x-2/4 m-auto`}
                    >
                        <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold text-center">
                            PROJECTS
                        </h1>
                    </div>
                </Link>
            </div>
        </div>
    );
}
