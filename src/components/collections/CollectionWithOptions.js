import { Card } from "antd";
import { Link } from "react-router-dom";
import { EditTwoTone, DeleteTwoTone, FileAddTwoTone } from "@ant-design/icons";

const Meta = Card;

export default function CollectionWithOptions({
    data: { folderName, imageCover, url, images },
}) {
    return (
        <Card
            cover={
                <Link to={url}>
                    <img alt={folderName} src={imageCover} />
                </Link>
            }
            actions={[
                <FileAddTwoTone key="Add"></FileAddTwoTone>,
                <EditTwoTone key="Edit"></EditTwoTone>,
                <DeleteTwoTone key="Delete"></DeleteTwoTone>,
            ]}
        >
            <div className="text-center font-bold"> {folderName}</div>
            <div className="absolute top-0 left-0 p-2 bg-black opacity-50 ">
                <span className="text-white">{images.length}</span>
            </div>
        </Card>
    );
}
