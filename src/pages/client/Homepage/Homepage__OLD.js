import {
    GroupsPreview,
    RandomAlbumsPreview,
    Contact,
    About,
} from "../../../components";
import { Layout } from "../../../layouts";
import Newsreel from "./Newsreel";

export default function Homepage__old() {
    return (
        <Layout>
            <section className="w-full h-full sm:flex gap-4 sm:h-96 md:h-128 xl:h-144 2xl:h-216">
                <Newsreel />
                <GroupsPreview className="my-12 h-120 sm:h-full md:my-0" />
            </section>

            <section>
                <p className="text-base 2xl:text-2xl text-center tracking-widest">
                    LATEST WORKS
                </p>
            </section>
            <section>
                <RandomAlbumsPreview size={16} />
            </section>

            {/* <AnimationOnScroll
                    delay="75"
                    animateIn="animate__slideInLeft"
                    animateOnce={true}
                > */}
            <About />
            {/* </AnimationOnScroll> */}
            <Contact />
        </Layout>
    );
}
