import classes from "./PreviewCard.module.css";
export default function PreviewCard({ title, description }) {
    return (
        <div className="w-full h-full bg-cover relative bg-preview-image ">
            <div
                className={`${classes.transparent} left-8 p-6 top-1/4 h-3/6 w-5/6 lg:w-2/6 lg:h-5/6 lg:top-20 2xl:h-4/6 2xl:top-32 text-center bg-white flex flex-col absolute opacity-90 justify-between`}
            >
                <h1 className="text-4xl md:text-5xl font-bold">
                    {title || "ROMAN CLASSIC"}
                </h1>
                <h2 className="text-red-800 text-2xl sm:text-3xl md:text-4xl font-semibold">
                    {description ||
                        "High quality trees black dark white light seemless boost fracture transform"}
                </h2>
            </div>
        </div>
    );
}
