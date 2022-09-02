import TextPreviewBox from "../ui/TextPreviewBox";
export default function AlbumInfo({
    data: { image, description, code, width, height, depth },
    className,
}) {
    return (
        <div className={"flex gap-4 shadow-lgb rounded-3xl " + className}>
            <div className="basis-7/12 w-max">
                <img
                    src={image}
                    alt={code}
                    className="w-full h-full rounded-2xl object:cover"
                />
            </div>
            <div className="flex flex-col basis-5/12 flex-grow">
                <div className="m-4 md:m-8 xl:m-12">
                    <p className="text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold">
                        {description}
                    </p>
                    <br />
                    <p className="text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl font-medium">
                        Dimensions:
                    </p>
                    <p className="text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl font-medium">
                        <TextPreviewBox data="Width">{width}</TextPreviewBox> x
                        <TextPreviewBox data="Height">{height}</TextPreviewBox>{" "}
                        x <TextPreviewBox data="Depth">{depth}</TextPreviewBox>
                    </p>
                </div>
            </div>
        </div>
    );
}
