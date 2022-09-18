import { Card } from "antd";
import { Link } from "react-router-dom";
import { EditTwoTone, DeleteTwoTone, FileAddTwoTone } from "@ant-design/icons";
import { useEffect } from "react";

const Meta = Card;

export default function CollectionWithOptions({
    data: { folderName, imageCover, url, images },
    onClickAdd,
    onClickEdit,
    onClickDelete,
}) {
    return (
        <Card
            cover={
                <Link to={folderName}>
                    <img
                        alt={folderName}
                        src={imageCover}
                        className="w-full h-full object-cover"
                    />
                </Link>
            }
            actions={[
                <FileAddTwoTone key="Add" onClick={onClickAdd} />,
                <EditTwoTone key="Edit" onClick={onClickEdit} />,
                <DeleteTwoTone key="Delete" onClick={onClickDelete} />,
            ]}
        >
            <div className="text-center font-bold"> {folderName}</div>
            <div className="absolute top-0 left-0 p-2 bg-black opacity-50 ">
                <span className="text-white">{images.length}</span>
            </div>
        </Card>
    );
}
