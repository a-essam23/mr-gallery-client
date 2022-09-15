import { Button, Form, Input } from "antd";
import FormItem from "antd/es/form/FormItem";

export default function LoginForm() {
    return (
        <Form
            size="large"
            layout="vertical"
            onFinish={(data) => {
                console.log(data);
            }}
        >
            <FormItem name="email" label="EMAIL" required>
                <Input required />
            </FormItem>
            <FormItem name="password" label="PASSWORD" required>
                <Input required />
            </FormItem>
            <Button type="primary" htmlType="submit" danger>
                Log in
            </Button>
        </Form>
    );
}
