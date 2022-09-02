import { Layout, Menu } from "antd";
import { v4 } from "uuid";
const { Sider } = Layout;

const titles = ["Projects", "Models", "Molds"];

const items = titles.map((title) => ({
    key: v4(),
    label: title,
}));

export default function Sidebar() {
    return (
        <Sider
            breakpoint="xs"
            collapsedWidth="0"
            style={{
                overflow: "auto",
                height: "100vh",
                position: "fixed",
                left: 0,
                top: 0,
                bottom: 0,
                maxWidth: "50px",
            }}
        >
            <Menu theme="dark" mode="inline" items={items} />
        </Sider>
    );
}
