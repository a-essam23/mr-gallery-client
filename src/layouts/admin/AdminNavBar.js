import logo from "../../assets/logo.png";
import phone from "../../assets/phone.png";
import { Link } from "react-router-dom";
import { Button, Menu } from "antd";
import { useState } from "react";
import { getGroups } from "../../services";
import { useEffect } from "react";
import { CustomForm } from "../../components";
export default function AdminNavBar() {
    const [items, setItems] = useState([]);
    const [current, setCurrent] = useState("");
    const [isShown, setIsShown] = useState(false);
    useEffect(() => {
        getGroups().then((data) => {
            setItems(data);
        });
    }, [isShown]);
    return (
        <div className="container flex md:py-1 2xl:py-4 items-center justify-between ">
            <div className="flex gap-12">
                <Link to="/" className="flex flex-col w-20">
                    <img src={logo} alt="logo" />
                    <img src={phone} alt="whats" />
                </Link>
                <Menu
                    className="grow"
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
                                className="font-bold text-xl"
                            >
                                {item.name.toUpperCase()}
                            </Link>
                        ),
                        key: item._id,
                    }))}
                />
            </div>
            <Button
                className="bg-blue-600"
                type="primary"
                size="large"
                onClick={() => {
                    setIsShown(true);
                }}
            >
                Add Group
            </Button>
            {isShown && (
                <CustomForm
                    selection="group"
                    onClickHandler={() => setIsShown(false)}
                />
            )}
        </div>
    );
}
