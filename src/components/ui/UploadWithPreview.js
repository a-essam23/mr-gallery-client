import { useState } from "react";
import testImg from "../../assets/previewbg.jpg";
import CropDragger from "../Forms/CropDragger";
import { Spin } from "antd";
import { useEffect } from "react";

export default function UploadWithPreview({ loading }) {
    // eslint-disable-next-line
    const [msg, setMsg] = useState("");
    // eslint-disable-next-line
    const [file, setFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const PreviewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        setFile(file);
        setMsg("");
    };
    useEffect(() => {
        setIsLoading(loading);
    }, [loading]);
    return (
        <div className="relative w-full h-full justify-center items-center flex">
            <div
                className={`w-full h-full absolute z-10 ${
                    isLoading ? "hidden" : "opacity-40"
                }`}
            >
                <CropDragger previewFile={PreviewFile} />
            </div>
            <div className="absolute w-full h-full">
                <img
                    src={testImg}
                    alt="test-1"
                    className={`min-h-full ${
                        isLoading ? "hidden" : "opacity-40"
                    }`}
                />
            </div>
            <Spin spinning={isLoading} size="large" />
        </div>
    );
}
