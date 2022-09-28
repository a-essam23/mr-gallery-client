import { PlusCircleTwoTone } from "@ant-design/icons";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, Spin } from "antd";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthProvider";
import { deleteOneGroup, getGroups } from "../../services";
import CustomForm from "../Forms/CustomForm";

export default function CollapseMenu() {
    const [items, setItems] = useState([]);
    const [current, setCurrent] = useState("");
    const [isShown, setIsShown] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [msg, setMsg] = useState("");
    const authContext = useContext(AuthContext);

    const handleDelete = async (name) => {
        setIsLoading(true);
        deleteOneGroup(name, authContext.token)
            .then(() => {
                setIsLoading(false);
                setMsg("Deleted!");
            })
            .catch((e) => {
                setIsLoading(false);
                setMsg(e.message);
            });
    };

    useEffect(() => {
        setIsLoading(true);
        getGroups()
            .then((data) => {
                setItems(data);
                setIsLoading(false);
            })
            .catch((e) => {});
    }, [isShown, msg]);

    return (
        <div className="h-max">
            {isShown && (
                <CustomForm
                    selection="group"
                    onClickHandler={() => setIsShown(false)}
                />
            )}
            <div className="text-2xl bg-slate-300 text-white text-center tracking-widest font-bold py-2 px-4 items-center justify-between flex overflow-hidden">
                GROUPS
                {isLoading ? (
                    <Spin />
                ) : (
                    <PlusCircleTwoTone
                        onClick={() => {
                            setIsShown(true);
                        }}
                    />
                )}
            </div>
            {items.length > 0 && (
                <Menu
                    className="h-full "
                    defaultSelectedKeys={["1"]}
                    mode="vertical"
                    theme="light"
                    selectedKeys={[current]}
                    items={items.map((item) => ({
                        label: (
                            <div>
                                <Link
                                    to={`/admin/${item.name}`}
                                    onClick={() => {
                                        setCurrent(item._id);
                                    }}
                                    className="text-base"
                                >
                                    {item.name.toUpperCase()}
                                </Link>
                                <FontAwesomeIcon
                                    icon={faMinusCircle}
                                    color="red"
                                    className="absolute right-0 top-2/4 -translate-y-2/4 mr-4 "
                                    size="lg"
                                    onClick={() => {
                                        setIsLoading(true);
                                        handleDelete(item.name);
                                    }}
                                />
                            </div>
                        ),
                        key: item._id,
                    }))}
                />
            )}
        </div>
    );
}
