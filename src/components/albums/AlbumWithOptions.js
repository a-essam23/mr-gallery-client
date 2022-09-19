import { Card } from "antd";
import { Link } from "react-router-dom";
import { EditTwoTone, DeleteTwoTone, FileAddTwoTone } from "@ant-design/icons";

export default function AlbumWithOptions({
    data: { imageName, code, folderName },
    onClickEdit,
    onClickDelete,
}) {
    return (
        <Card
            cover={
                <Link
                    to={code}
                    className="h-full w-full flex justify-center items-center"
                >
                    <img alt={code} src={imageName} className="w-full h-full" />
                </Link>
            }
            actions={[
                <EditTwoTone key="Edit" onClick={onClickEdit} />,
                <DeleteTwoTone key="Delete" onClick={onClickDelete} />,
            ]}
        >
            <div className="text-center font-bold"> {folderName}</div>
            <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 p-4 bg-black opacity-40 ">
                <span className="text-white">{code}</span>
            </div>
        </Card>
    );
}
