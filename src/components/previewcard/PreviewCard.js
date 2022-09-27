import placeholder from "../../assets/placeholder.jpg";
export default function PreviewCard({ title, description, background }) {
    return background ? (
        <div
            className="w-full h-full bg-cover relative  "
            style={{ backgroundImage: `url('${background}')` }}
        >
            <div
                className={`transparent-white left-8 p-6 xl:w-112 top-1/4 h-3/6 lg:h-5/6 lg:top-20 2xl:h-4/6 2xl:top-32 text-center bg-white flex flex-col absolute opacity-90 justify-between`}
            >
                <h1 className="text-4xl md:text-5xl font-bold">
                    {title || "PLACEHOLDER TITLE"}
                </h1>
                <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold overflow-clip">
                    {description ||
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                </h2>
            </div>
        </div>
    ) : (
        <div
            className="w-full h-full bg-cover relative "
            style={{ backgroundImage: `url('${placeholder}')` }}
        >
            <div
                className={`transparent-white top-1/2 -translate-y-2/4 py-6 left-2/4 -translate-x-2/4 w-60 md:-translate-x-0 md:p-2 lg:p-4 2xl:p-8 md:left-8 lg:left-12 xl:left-14 2xl:left-16 md:w-60 lg:w-80 xl:w-96 2xl:w-120 text-center bg-white flex flex-col absolute opacity-90 justify-between`}
            >
                <div className="text-lg sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold">
                    {title || "PLACEHOLDER TITLE"}
                </div>
                <div className="text-center pt-8 text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold overflow-clip">
                    {description ||
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                </div>
            </div>
        </div>
    );
}
