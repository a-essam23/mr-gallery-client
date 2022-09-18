import { Input } from "antd";
const { Search } = Input;

export default function Searchbar({ className }) {
    return (
        <Search
            placeholder="Search for models or collections..."
            enterButton="Search"
            size="large"
            loading
            className={`p-8 2xl:p-12 ${className}`}
        />
    );
}
