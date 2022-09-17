import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import blank from "../../../assets/blank.jpg";
import AuthContext from "../../../context/AuthProvider";
import postGroup from "../../../services/groups/postGroup";
import ButtonsMenu from "../ButtonsMenu";
import AlbumForm from "./AlbumForm";
import CollectionForm from "./CollectionForm";
import GroupForm from "./GroupForm";

export default function CustomForm({
    selection = "group",
    selectedCollection,
}) {
    const authContext = useContext(AuthContext);
    const location = useParams();
    const [selectedForm, setSelectedForm] = useState(<></>);
    const [fileList, setFileList] = useState([]);
    const [previewImage, setPreviewImage] = useState(blank);
    const [errMsg, setErrMsg] = useState("");
    const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };

    const PreviewFile = async (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.addEventListener("loadend", () => {
            setPreviewImage(reader.result);
        });
    };

    const handleSubmit = async (
        body,
        postFunction,
        token = authContext.token
    ) => {
        await postFunction(body, token)
            .then(() => {
                console.log("Successfully created!");
            })
            .catch((e) => {
                setErrMsg(e.message);
                console.log(errMsg);
            });
        return;
    };

    useEffect(() => {
        if (selection == "group") {
            setSelectedForm(
                <GroupForm
                    previewImage={previewImage}
                    onChange={onChange}
                    previewFile={PreviewFile}
                    onFinish={(data) =>
                        handleSubmit(
                            { ...data, imageCover: previewImage },
                            postGroup
                        )
                    }
                />
            );
        }
        if (selection == "collection") {
            setSelectedForm(
                <CollectionForm
                    previewImage={previewImage}
                    onChange={onChange}
                    previewFile={PreviewFile}
                    group={location.group}
                />
            );
        }
        if (selection == "album") {
            console.log(selection);
            setSelectedForm(
                <AlbumForm
                    previewImage={previewImage}
                    onChange={onChange}
                    previewFile={PreviewFile}
                />
            );
        }
    }, []);

    return (
        <div className="bg-white flex gap-4 p-2 h-200 w-10/12 m-auto">
            <div className="flex relative basis-2/5 border-2 border-gray-300 ">
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
                <div className="text-red-500 text-lg px-4 ">{errMsg}</div>
            </div>
        </div>
    );
}
