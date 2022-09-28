import { Card } from "antd";
import { Link } from "react-router-dom";
import { EditTwoTone, DeleteTwoTone } from "@ant-design/icons";

export default function AlbumWithOptions({
    data: { imageUrl, code, folderName, size },
    onClickEdit,
    onClickDelete,
}) {
    return (
        <Card
            cover={
                <Link to={code} className="h-full w-full ">
                    <img alt={code} src={imageUrl} className="w-full h-full" />
                </Link>
            }
            actions={[
                <EditTwoTone key="Edit" onClick={onClickEdit} />,
                <DeleteTwoTone key="Delete" onClick={onClickDelete} />,
            ]}
        >
            <div className="text-center font-bold"> {code}</div>
            <p className="text-center text-red-600">{size}</p>
        </Card>
    );
}
