import { Spin } from "antd";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { v4 } from "uuid";
import blank from "../../../assets/blank.jpg";
import AuthContext from "../../../context/AuthProvider";
import postAlbum from "../../../services/albums/postAlbum";
import postCollection from "../../../services/collections/postCollection";
import postGroup from "../../../services/groups/postGroup";
import ButtonsMenu from "../ButtonsMenu";
import AlbumForm from "./AlbumForm";
import CollectionForm from "./CollectionForm";
import GroupForm from "./GroupForm";

export default function CustomForm({
    selection = "group",
    selectedCollection,
    onClickHandler,
    className,
}) {
    const authContext = useContext(AuthContext);
    const location = useParams();
    const [selectedForm, setSelectedForm] = useState(<></>);
    const [fileList, setFileList] = useState([]);
    const [previewImage, setPreviewImage] = useState("");
    const [msg, setMsg] = useState("");
    const [previewFile, setPreviewFile] = useState(null);

    const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };

    const PreviewFile = async (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        setPreviewFile(file);
        setMsg("");
        reader.addEventListener("loadend", () => {
            setPreviewImage(reader.result);
        });
    };

    const handleSubmit = async (
        body,
        postFunction,
        token = authContext.token
    ) => {
        setMsg(<Spin />);
        await postFunction(body, token)
            .then(() => {
                setMsg("ADDED");
            })
            .catch((e) => {
                setMsg(`Error: ${e.message}`);
            });
        return;
    };

    useEffect(() => {
        if (selection === "group") {
            setSelectedForm(
                <GroupForm
                    previewImage={previewImage}
                    onChange={onChange}
                    previewFile={PreviewFile}
                    onFinish={(data) =>
                        handleSubmit(
                            { ...data, imageCover: previewFile },
                            postGroup
                        )
                    }
                />
            );
        }
        if (selection === "collection") {
            setSelectedForm(
                <CollectionForm
                    previewImage={previewImage}
                    onChange={onChange}
                    previewFile={PreviewFile}
                    group={location.group}
                    onFinish={(data) => {
                        handleSubmit(
                            { ...data, imageCover: previewFile },
                            postCollection
                        );
                    }}
                />
            );
        }
        if (selection === "model") {
            setSelectedForm(
                <AlbumForm
                    collection={selectedCollection}
                    previewImage={previewImage}
                    onChange={onChange}
                    previewFile={PreviewFile}
                    onFinish={(data) => {
                        handleSubmit(
                            {
                                ...data,
                                imageName: previewFile,
                            },
                            postAlbum
                        );
                    }}
                />
            );
        }
    }, [previewFile, previewImage]);

    return (
        <>
            <div
                className="fixed bg-black opacity-50 w-screen h-screen left-0 top-0 cursor-pointer z-10 "
                onClick={onClickHandler}
            ></div>
            <div
                className={`bg-white flex gap-2 p-2 h-144 2xl:h-200 w-8/12 m-auto fixed z-20 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 ${className}`}
            >
                <div className="flex relative basis-2/5 outline-2 outline outline-gray-300 ">
                    <div className="flex w-full justify-center items-center ">
                        <img
                            src={previewImage}
                            alt="example"
                            className="max-h-full"
                        />
                    </div>
                </div>
                <div className="basis-3/5 flex-col outline-gray-300 outline-2 outline">
                    <div className="flex flex-1 ">
                        <ButtonsMenu
                            items={["group", "collection", "model"]}
                            selectedButton={selection}
                        />
                    </div>
                    {selectedForm}
                    <div className={"text-2xl px-4"}>{msg}</div>
                </div>
            </div>
        </>
    );
}
