import { useState } from "react";

export default function TextPreviewBox(props) {
    const [isHovering, setIsHovering] = useState(false);
    return (
        <div
            onTouchMove={() => setIsHovering(true)}
            onTouchCancel={() => setIsHovering(false)}
            onMouseOver={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="inline-block text-cyan-800 cursor-pointer"
        >
            <div className="relative">{props.children}</div>
            {isHovering && (
                <div className="absolute p-1 sm:p-2 xl:p-4 rounded-2xl shadow-md border-2 m-auto -translate-x-2 translate-y-1 sm:-translate-x-4 sm:translate-y-2 ">
                    {props.data}
                </div>
            )}
        </div>
    );
}
