import { Button, Form, Input, Select } from "antd";
import CropDragger from "./CropDragger";

export default function AlbumForm({
    fileList,
    onChange,
    previewFile,
    collection,
    onFinish,
    isUpdate,
}) {
    console.log(isUpdate);
    return (
        <Form
            onFinish={onFinish}
            layout="vertical"
            className="px-4 pt-2 2xl:pt-16 "
            size="middle"
        >
            <Form.Item name="code" label="Image code">
                <Input required placeholder="Ex: AA, BB, CA" />
            </Form.Item>
            <Form.Item name="size" label="Image dimensions">
                <Input required placeholder="Ex: 24x62" value={isUpdate} />
            </Form.Item>
            <Form.Item
                name="folderName"
                label="Collection"
                initialValue={collection}
            >
                <Select>
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
            <Form.Item className="">
                <Button type="primary" danger size="large" htmlType="submit">
                    ADD IMAGE
                </Button>
            </Form.Item>
        </Form>
    );
}
