import { Button, Form, Input, Select } from "antd";
import FormItem from "antd/es/form/FormItem";
import { v4 } from "uuid";

export default function Searchbar({ onFinish, className, choices = [""] }) {
    return (
        <Form onFinish={onFinish} className="flex pt-8 pb-16 bg-white gap-2">
            <FormItem name="value" className="w-full">
                <Input required size="large" />
            </FormItem>

            <FormItem initialValue={choices[0]} name="type">
                <Select size="large">
                    {choices.map((choice) => {
                        return (
                            <Select.Option key={v4()} value={choice}>
                                {choice.toUpperCase()}
                            </Select.Option>
                        );
                    })}
                </Select>
            </FormItem>
            <Button
                htmlType="submit"
                size="large"
                type="primary"
                className="bg-blue-600"
            >
                Search
            </Button>
        </Form>
    );
}
