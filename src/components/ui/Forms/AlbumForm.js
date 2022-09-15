import { Button, Form, Input, Select } from "antd";
import CropDragger from "./CropDragger";

export default function AlbumForm({
    fileList,
    onChange,
    previewFile,
    collection,
    onFinish,
}) {
    return (
        <Form
            onFinish={onFinish}
            layout="vertical"
            className="px-4 py-16"
            size="large"
        >
            <Form.Item name="imageName" label="Image code">
                <Input placeholder="Ex: AA, BB, CA" />
            </Form.Item>
            <Form.Item name="folder" label="Collection">
                <Select defaultValue={collection}>
                    <Select.Option value={collection}>
                        {collection.toUpperCase()}
                    </Select.Option>
                </Select>
            </Form.Item>
            <Form.Item label="Image">
                <CropDragger
                    fileList={fileList}
                    onChange={onChange}
                    previewFile={previewFile}
                />
            </Form.Item>
            <Form.Item className="pt-12">
                <Button type="primary" danger size="large" htmlType="submit">
                    ADD IMAGE
                </Button>
            </Form.Item>
        </Form>
    );
}
