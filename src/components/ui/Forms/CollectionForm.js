import { Button, Form, Input, Select } from "antd";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import CropDragger from "./CropDragger";

export default function CollectionForm({
    fileList,
    onChange,
    previewFile,
    onFinish,
}) {
    const location = useParams();
    const [group, setGroup] = useState(location.group);
    useEffect(() => {
        setGroup(location.group);
    });
    return (
        <Form
            onFinish={onFinish}
            layout="vertical"
            className="px-4 pt-2 2xl:pt-16 "
            size="middle"
        >
            <Form.Item name="folderName" label="Collection name">
                <Input required placeholder="Ex: AA, BB, CA" />
            </Form.Item>
            <Form.Item name="rootFolderName" label="Group" initialValue={group}>
                <Select>
                    <Select.Option value={group}>
                        {group.toUpperCase()}
                    </Select.Option>
                </Select>
            </Form.Item>
            <Form.Item label="Collection Image">
                <CropDragger
                    fileList={fileList}
                    onChange={onChange}
                    previewFile={previewFile}
                />
            </Form.Item>
            <Form.Item className="">
                <Button type="primary" danger size="large" htmlType="submit">
                    ADD COLLECTION
                </Button>
            </Form.Item>
        </Form>
    );
}
