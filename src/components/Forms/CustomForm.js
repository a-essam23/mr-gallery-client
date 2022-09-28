import { Spin } from "antd";
import { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import AuthContext from "../../context/AuthProvider";
import {
    postAlbum,
    postCollection,
    postGroup,
    updateOne,
} from "../../services";

import ButtonsMenu from "../ui/ButtonsMenu";

import AlbumForm from "./AlbumForm";
import CollectionForm from "./CollectionForm";
import GroupForm from "./GroupForm";

export default function CustomForm({
    selection = "group",
    selectedCollection,
    onClickHandler,
    className,
    aspectRatio,
    isUpdate,
}) {
    const ARarr = [4 / 5, 3 / 4, 2 / 3, 1 / 1];
    const authContext = useContext(AuthContext);
    const location = useParams();
    const [collectionAR, setCollectionAR] = useState(
        ARarr[Math.floor(Math.random() * ARarr.length)]
    );
    const [selectedForm, setSelectedForm] = useState(<></>);
    const [previewImage, setPreviewImage] = useState("");
    const [msg, setMsg] = useState("");
    const [previewFile, setPreviewFile] = useState(null);

    const PreviewFile = async (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        setPreviewFile(file);
        setCollectionAR(ARarr[Math.floor(Math.random() * ARarr.length)]);
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
                    aspectRatio={collectionAR}
                    previewImage={previewImage}
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
            console.log(isUpdate);
            setSelectedForm(
                <AlbumForm
                    isUpdate={isUpdate}
                    aspectRatio={3 / 4}
                    collection={selectedCollection}
                    previewImage={previewImage}
                    previewFile={PreviewFile}
                    onFinish={(data) => {
                        isUpdate
                            ? handleSubmit(
                                  {
                                      ...data,
                                  },
                                  updateOne
                              )
                            : handleSubmit(
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [previewFile, collectionAR]);

    return (
        <>
            <div
                className="fixed bg-black opacity-50 w-screen h-screen left-0 top-0 cursor-pointer z-10 "
                onClick={onClickHandler}
            ></div>

            <div
                className={`bg-white flex h-168 2xl:h-200 w-10/12 m-auto fixed z-20 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 ${className}`}
            >
                <div className="flex relative basis-2/5 outline-2 outline outline-gray-300 p-4">
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
