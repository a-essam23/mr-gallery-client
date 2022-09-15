import logo from "../../assets/logo.png";
import phone from "../../assets/phone.png";
import { Link } from "react-router-dom";
import { Button, Menu } from "antd";
import { useState } from "react";
import { getGroups } from "../../services";
import { useEffect } from "react";
export default function AdminNavBar() {
    const [items, setItems] = useState([]);
    const [current, setCurrent] = useState("");
    useEffect(() => {
        getGroups().then((data) => {
            setItems(data);
        });
    }, []);

    return (
        <div className="container flex md:py-1 2xl:py-4 items-center justify-between ">
            <div className="flex gap-12">
                <Link to="/" className="flex flex-col w-20">
                    <img src={logo} alt="logo" />
                    <img src={phone} alt="whats" />
                </Link>
                <Menu
                    theme="light"
                    mode="horizontal"
                    selectedKeys={[current]}
                    items={items.map((item) => ({
                        label: (
                            <Link
                                to={`/admin/${item.name}`}
                                onClick={() => {
                                    setCurrent(item._id);
                                }}
                            >
                                {item.name.toUpperCase()}
                            </Link>
                        ),
                        key: item._id,
                    }))}
                />
            </div>
            <Button className="bg-blue-600" type="primary" size="large">
                Add Group
            </Button>
        </div>
    );
}