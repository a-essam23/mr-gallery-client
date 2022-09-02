import { Layout as ALayout } from "antd";
import {
    Header as AHeader,
    Content as AContent,
    Footer as AFooter,
} from "antd/lib/layout/layout";
import Breadcrumb from "./Breadcrumb";
import Footer from "./Footer";
import NavBar from "./NavBar";

function Layout({ children }) {
    return (
        <ALayout className="main-theme">
            <div className="absolute mt-2 mr-2 text-xs md:text-sm right-0 z-50 ">
                <span>العربيه</span>
                <span> English</span>
            </div>
            <AHeader className="h-auto p-0 m-0 flex justify-center main-theme flex-col sticky z-40 top-0 shadow-lg">
                <NavBar />
            </AHeader>
            <Breadcrumb />
            <AContent className="container flex flex-col main-theme">
                {children}
            </AContent>
            <AFooter className="m-0 p-0 mt-16">
                <Footer />
            </AFooter>
        </ALayout>
    );
}

export default Layout;
