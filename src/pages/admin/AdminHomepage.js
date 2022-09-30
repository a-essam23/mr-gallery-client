import {
    RandomAlbumsPreview,
    About,
    Contact,
    FourBoxPattern,
    SwiperTemplate,
} from "../../components";

import { AdminLayout } from "../../layouts";

export default function AdminHomepage() {
    return (
        <AdminLayout className="">
            <section className="w-full h-full gap-4 sm:flex sm:h-96 md:h-120 xl:h-144 2xl:h-216">
                <SwiperTemplate
                    showIndex
                    className="sm:basis-3/5 h-96 sm:h-full w-full shadow-cd"
                    items={
                        [
                            ////ELEMENTS GO HERE
                            // <UploadWithPreview />,
                            // <UploadWithPreview loading={true} />,
                            // <UploadWithPreview />,
                        ]
                    }
                />
                <FourBoxPattern className="my-12 h-120 sm:h-full sm:my-0 sm:basis-2/5 " />
            </section>
            <section className="text-3xl 2xl:text-2xl text-center tracking-widest">
                LATEST WORKS
            </section>
            <section>
                <RandomAlbumsPreview size={16} />
            </section>
            <About card={{}} />
            <Contact />
        </AdminLayout>
    );
}
