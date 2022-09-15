import { Button, Form, Input } from "antd";
import CropDragger from "./CropDragger";

export default function GroupForm({
    fileList,
    onChange,
    previewFile,
    onFinish,
}) {
    return (
        <Form
            onFinish={onFinish}
            layout="vertical"
            className="px-4 py-16 border-x-2 border-b-2  border-gray-300"
            size="large"
        >
            <Form.Item name="name" label="Group name">
                <Input placeholder="Ex: models, projects, molds" />
            </Form.Item>
            <Form.Item name="description" label="Group description">
                <Input placeholder="Ex: types of sand molds" />
            </Form.Item>
            <Form.Item label="Group Image">
                <CropDragger
                    fileList={fileList}
                    onChange={onChange}
                    previewFile={previewFile}
                />
            </Form.Item>
            <Form.Item className="pt-28">
                <Button type="primary" danger size="large" htmlType="submit">
                    ADD GROUP
                </Button>
            </Form.Item>
        </Form>
    );
}
