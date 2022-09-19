import classes from "./NavBar.module.css";
import logo from "../../assets/logo.png";
import phone from "../../assets/phone.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
function NavBar() {
    return (
        <div className="container flex items-center md:py-1 2xl:py-4 gap-4 justify-between">
            <HashLink
                to="/"
                className="flex flex-col w-20 h-auto md:w-24 xl:w-24"
            >
                <img src={logo} alt="logo" />
                <img src={phone} alt="whats" />
            </HashLink>
            <div className="flex gap-4">
                <Link to="/collections">
                    <div className={classes.item}>Explore</div>
                </Link>
                <HashLink to="/#about">
                    <div className={classes.item}>About Us</div>
                </HashLink>
                <HashLink to="/#contact">
                    <div className={classes.item}>Contact Us</div>
                </HashLink>
            </div>
        </div>
    );
}

export default NavBar;
