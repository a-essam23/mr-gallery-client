import TextPreviewBox from "../ui/TextPreviewBox";
export default function AlbumInfo({
    data: { imageUrl, code, folderName, size },
    className,
    onClickHandler,
}) {
    // const [width, height, depth] = size.split("x");
    // console.log(width, height, depth);
    return (
        <div className={"flex gap-4 rounded-2xl outline" + className}>
            <div className="md:basis-7/12 flex w-full justify-center items-center shadow-xl rounded-2xl ">
                <img
                    src={imageUrl}
                    alt={code}
                    className="w-full h-full max-h-full rounded-2xl object:cover"
                />
            </div>
            <div className="flex flex-col md:basis-5/12 flex-grow p-4 shadow-cd rounded-2xl">
                <div className="">
                    <p className="text-base sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold text-center">
                        {code}
                    </p>
                    {/* <br />
                    <p className="text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl font-medium">
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
