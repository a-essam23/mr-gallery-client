import {
    faFacebookMessenger,
    faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextPreviewBox from "../ui/TextPreviewBox";
export default function AlbumInfo({
    data: { imageUrl, code, size = null },
    className,
}) {
    const [width, height, depth] = size ? size.split(",") : [];
    // console.log(width, height, depth);
    return (
        <div className={"md:flex " + className}>
            <div className="basis-7/12 flex w-full justify-center items-center ">
                <img
                    src={imageUrl}
                    alt={code}
                    className="w-full h-full max-h-full object:cover sm:rounded-t-2xl md:rounded-tr-none md:rounded-l-3xl md:shadow-xl"
                />
            </div>
            <div className="justify-evenly md:justify-start md:gap-6 p-8 sm:p-6 md:p-8 lg:p-10 xl:p-10 2xl:p-12 mb-2 md:mb-0 md:shadow-2xl sm:rounded-b-2xl md:rounded-bl-none md:rounded-r-3xl flex md:flex-col basis-5/12 flex-grow ">
                <div className="flex gap-3 sm:gap-6 2xl:gap-8 justify-end rounded ">
                    <a href="/">
                        <FontAwesomeIcon
                            icon={faFacebookMessenger}
                            color="#006AFF"
                            className="w-5 md:w-6 lg:w-8 xl:w-8 2xl:w-10 h-auto "
                        />
                    </a>
                    <a href="/">
                        <FontAwesomeIcon
                            icon={faWhatsapp}
                            color="green"
                            className="w-5 md:w-6 lg:w-8 xl:w-8 2xl:w-10 h-auto"
                        />
                    </a>
                </div>
                <div className="">
                    <div className="items-center p-4 sm:p-6 md:p-0 lg:p-4 xl:p-2 text-2xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-semibold text-center">
                        {code}
                    </div>
                </div>
                <div className="gap-2 sm:gap-4 items-center lg:p-2 xl:p-4 2xl:p-8 flex text-lg sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl font-bold justify-evenly">
                    <TextPreviewBox data="Width">{width || ""}</TextPreviewBox>
                    {height && "  x  "}
                    <TextPreviewBox data="Height">
                        {height || ""}
                    </TextPreviewBox>
                    {depth && "  x  "}
                    <TextPreviewBox data="Depth">{depth || ""}</TextPreviewBox>
                </div>
            </div>
        </div>
    );
}
