import { v4 } from "uuid";
import { PreviewCard } from "../../../components";
const placeholders = [
    "https://cdn.discordapp.com/attachments/800463070170185809/1015171627924860999/54462632_2311144289143471_8524180622678163456_n.jpg",
    "https://cdn.discordapp.com/attachments/800463070170185809/1015171628163944458/302198695_3342009746056915_1111026988747899706_n.jpg",
    "https://cdn.discordapp.com/attachments/800463070170185809/1015171628390420480/52736424_2300020300255870_3599505863351468032_n.jpg",
    "https://cdn.discordapp.com/attachments/800463070170185809/1015171628625309727/53726528_2310136905910876_2962928917662400512_n.jpg",
];
export default function About({ className }) {
    return (
        <section id="about">
            <section className={"h-184 my-28 " + className}>
                <PreviewCard />
            </section>
            <section className={"h-144 my-20 flex flex-1" + className}>
                {placeholders.map((image) => (
                    <div className="w-full h-full" key={v4()}>
                        <img
                            src={image}
                            alt={v4()}
                            className="object-cover w-full h-full"
                        />
                    </div>
                ))}
            </section>
        </section>
    );
}
