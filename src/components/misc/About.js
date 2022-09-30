import { v4 } from "uuid";
import blank from "../../assets/blank.jpg";
import placeholder from "../../assets/placeholder.jpg";
import PreviewCard from "../previewcard/PreviewCard";
export default function About({
    className,
    card: { title, description, previewImg },
    imageList = [],
}) {
    if (imageList.length == 0)
        imageList = [
            placeholder,
            blank,
            placeholder,
            blank,
            placeholder,
            blank,
            placeholder,
            blank,
            placeholder,
            blank,
            placeholder,
            blank,
            placeholder,
            blank,
            placeholder,
            blank,
            placeholder,
            blank,
            placeholder,
            blank,
            placeholder,
            blank,
            placeholder,
            blank,
            placeholder,
        ];
    return (
        <section id="about">
            <div
                className={
                    "h-96 md:h-112 lg:h-128 xl:h-144 2xl:h-184  " + className
                }
            >
                <PreviewCard
                    title={title || "PLACEHOLDER"}
                    description={
                        description ||
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud "
                    }
                    background={previewImg || placeholder}
                />
            </div>
            <div
                className={
                    "h-96 md:h-112 lg:h-128 xl:h-144 2xl:h-184 my-20 flex flex-1" +
                    className
                }
            >
                {imageList.map((image) => (
                    <div className="w-full h-full" key={v4()}>
                        <img
                            src={image}
                            alt={v4()}
                            className="object-cover w-full h-full"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
