import { Layout as ALayout } from "antd";
import {
    Header as AHeader,
    Content as AContent,
    Footer as AFooter,
} from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import { GroupsMenuWithOptions } from "../../components";
import Breadcrumb from "../client/Breadcrumb";
import Footer from "../client/Footer";
import AdminNavBar from "./AdminNavBar";

export default function AdminLayout({ children, className = "" }) {
    return (
        <ALayout className="">
            <AHeader className="main-theme h-auto p-0 m-0 flex sticky z-10 top-0 shadow-lg">
                <AdminNavBar />
            </AHeader>
            <AContent className="">
                <Breadcrumb />
                <ALayout
                    hasSider
                    className="w-full min-h-screen h-full max-w-full"
                >
                    <Sider
                        className="main-theme mr-4 xl:mr-0 "
                        breakpoint="md"
                        width={225}
                    >
                        <GroupsMenuWithOptions />
                    </Sider>
                    <AContent
                        className={`${className} xl:mx-6 bg-white  min-h-screen h-full `}
                    >
                        {children}
                    </AContent>
                </ALayout>
            </AContent>
            <AFooter className="m-0 p-0 mt-16">
                <Footer />
            </AFooter>
        </ALayout>
    );
}
