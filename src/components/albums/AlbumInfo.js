import TextPreviewBox from "../ui/TextPreviewBox";
export default function AlbumInfo({
    data: { imageUrl, code, folderName, size },
    className,
}) {
    // const [width, height, depth] = size.split("x");
    // console.log(width, height, depth);
    return (
        <div className={"flex gap-4 shadow-lgb rounded-3xl " + className}>
            <div className="basis-7/12 w-max">
                <img
                    src={imageUrl}
                    alt={code}
                    className="w-full h-full rounded-2xl object:cover"
                />
            </div>
            <div className="flex flex-col basis-5/12 flex-grow">
                <div className="m-4 md:m-8 xl:m-12">
                    <p className="text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold">
                        {code}
                    </p>
                    <br />
                    {/* <p className="text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl font-medium">
                        Dimensions:
                    </p>
                    <p className="text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl font-medium">
                        <TextPreviewBox data="Width">{width}</TextPreviewBox> x
                        <TextPreviewBox data="Height">{height}</TextPreviewBox>{" "}
                        x <TextPreviewBox data="Depth">{depth}</TextPreviewBox>
                    </p> */}
                </div>
            </div>
        </div>
    );
}
