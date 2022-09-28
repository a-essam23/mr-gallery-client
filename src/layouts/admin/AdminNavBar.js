import logo from "../../assets/logo.png";
import phone from "../../assets/phone.png";
import { Link } from "react-router-dom";
export default function AdminNavBar() {
    return (
        <div className="container flex md:py-1 2xl:py-4 items-center justify-between ">
            <div className="flex gap-12">
                <Link to="/" className="flex flex-col w-20">
                    <img src={logo} alt="logo" />
                    <img src={phone} alt="whats" />
                </Link>
            </div>
        </div>
    );
}
