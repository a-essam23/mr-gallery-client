import { InboxOutlined } from "@ant-design/icons";
import { useState } from "react";
import testImg from "../../assets/previewbg.jpg";
import Dragger from "antd/lib/upload/Dragger";
import CropDragger from "../Forms/CropDragger";
import { Spin } from "antd";
import { useEffect } from "react";

export default function UploadWithPreview({ loading }) {
    const [msg, setMsg] = useState("");
    const [file, setFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const PreviewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        setFile(file);
        console.log(file);
        setMsg("");
    };
    useEffect(() => {
        setIsLoading(loading);
    }, []);
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
                    alt="test-image-1"
                    className={`min-h-full ${
                        isLoading ? "hidden" : "opacity-40"
                    }`}
                />
            </div>
            <Spin spinning={isLoading} size="large" />
        </div>
    );
}
