import { ProjectsPreview } from "../../components";
import Layout from "../../layouts/client/Layout";
import About from "./About";
import Contact from "./Contact";
import Newsreel from "./Newsreel";
import RandomAlbumsPreview from "./RandomAlbumsPreview";

function Homepage() {
    return (
        <Layout>
            <section className="w-full h-full sm:flex gap-4 sm:h-96 md:h-128 xl:h-144 2xl:h-216">
                <Newsreel />
                <ProjectsPreview className="my-12 h-120 sm:h-full md:my-0" />
            </section>
            <hr className="my-8 md:my-10 xl:my-12 2xl:my-20 container" />
            <p className="mb-6 md:mb-10 xl:mb-12 2xl:mb-20 text-base 2xl:text-2xl">
                LATEST WORKS
            </p>
            <RandomAlbumsPreview />
            <About />
            <Contact />
        </Layout>
    );
}

export default Homepage;
