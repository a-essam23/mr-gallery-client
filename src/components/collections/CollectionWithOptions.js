import { Card } from "antd";
import { Link } from "react-router-dom";
import { EditTwoTone, DeleteTwoTone, FileAddTwoTone } from "@ant-design/icons";

export default function CollectionWithOptions({
    data: { folderName, imageCover, url, images },
    onClickAdd,
    onClickEdit,
    onClickDelete,
}) {
    return (
        <Card
            cover={
                <Link to={folderName} className="h-48 xl:h-56 2xl:h-72">
                    <img
                        alt={folderName}
                        src={imageCover}
                        className="h-full w-full object-fit  "
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
            <div className="absolute top-0 left-0 p-2 bg-black opacity-75 ">
                <span className="text-white">{images.length}</span>
            </div>
        </Card>
    );
}
