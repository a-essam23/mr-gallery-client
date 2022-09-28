import { Layout as ALayout } from "antd";
import {
    Header as AHeader,
    Content as AContent,
    Footer as AFooter,
} from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import { CollapseMenu } from "../../components";
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
                <ALayout className="flex-row min-h-screen">
                    <Sider
                        className="main-theme mr-4 xl:mr-0 "
                        breakpoint="lg"
                        onBreakpoint={() => {}}
                        width={225}
                    >
                        <CollapseMenu />
                    </Sider>
                    <AContent
                        className={`${className}  bg-white px-2 min-h-screen h-full pb-40`}
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
