import classes from "./PreviewCard.module.css";
export default function PreviewCard({ data }) {
    return (
        <div className="w-full h-full bg-preview-image bg-cover relative ">
            <div
                className={`${classes.transparent} left-8 p-6 top-1/4 h-3/6 w-5/6 lg:w-2/6 lg:h-5/6 lg:top-20 2xl:h-4/6 2xl:top-32 text-center bg-white flex flex-col absolute opacity-90 justify-between`}
            >
                <h1 className="text-4xl md:text-5xl font-bold ">
                    ROMAN CLASSIC
                </h1>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                    Highest quality tree feed meat seed clam tram tree feed meat
                    seed clam tramtree feed meat seed clam tram
                </h2>
            </div>
        </div>
    );
}
