import { Button, Form, Input, Select } from "antd";
import CropDragger from "./CropDragger";

export default function CollectionForm({
    fileList,
    onChange,
    previewFile,
    group,
    onFinish,
}) {
    return (
        <Form
            onFinish={onFinish}
            layout="vertical"
            className="px-4 py-16 "
            size="large"
        >
            <Form.Item name="folderName" label="Collection name">
                <Input placeholder="Ex: AA, BB, CA" />
            </Form.Item>
            <Form.Item name="group" label="Group" initialValue={group}>
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
            <Form.Item className="pt-12">
                <Button type="primary" danger size="large" htmlType="submit">
                    ADD COLLECTION
                </Button>
            </Form.Item>
        </Form>
    );
}
