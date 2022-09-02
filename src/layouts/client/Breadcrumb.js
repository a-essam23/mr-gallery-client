import { v4 } from "uuid";
import { useLocation, Link } from "react-router-dom";
import { Breadcrumb as ABreadcrumb } from "antd";
import BreadcrumbItem from "antd/lib/breadcrumb/BreadcrumbItem";
import { useMemo } from "react";

function Breadcrumb() {
    const { pathname } = useLocation();
    function getBreadCrumbs() {
        const paths = pathname.split("/").filter((path) => path.length > 1);
        if (paths.length < 1) return null;
        const crumbList = paths.map((path, index) => {
            const href = "/" + paths.slice(0, index + 1).join("/");
            return { path, href };
        });
        return (
            <>
                <BreadcrumbItem key={v4()}>
                    <Link to="/">HOME</Link>
                </BreadcrumbItem>
                {crumbList.map(({ href, path }, index) => (
                    <BreadcrumbItem key={v4()}>
                        <Link to={href}>{path.toUpperCase()}</Link>
                    </BreadcrumbItem>
                ))}
            </>
        );
    }
    const crumbs = useMemo(getBreadCrumbs, [pathname]);

    return (
        <ABreadcrumb className="container my-2 md:my-6 2xl:my-8">
            {crumbs}
        </ABreadcrumb>
    );
}

export default Breadcrumb;
