import { Card } from "../../components";

const groups = [
    {
        name: "Projects",
        img: "https://b.3ddd.ru/media/cache/tuk_model_custom_filter_en/model_images/0000/0000/0143/143295.547ef53f13419.jpeg",
    },
    {
        name: "Models",
        img: "https://i.pinimg.com/564x/bc/ed/51/bced5199a694b73d2d6eff5b85a758c6.jpg",
    },
    {
        name: "Molds",
        img: "https://cdn.discordapp.com/attachments/800463070170185809/1015168973060452383/302305740_3342624505995439_156571773198245505_n.jpg",
    },
];

function GroupsIntro({ className }) {
    return (
        <div className={"flex flex-1 gap-4 " + className}>
            <div className="flex flex-col gap-4">
                <Card className="basis-2/5 min-h-0 bg-white shadow-cd">
                    <h2>{groups[0].name}</h2>
                </Card>
                <div className="basis-3/5 min-h-0 bg-white shadow-cd">
                    <img
                        src={groups[2].img}
                        alt={groups[2].name}
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div className="basis-3/5 min-h-0 bg-white shadow-cd">
                    <img
                        src={groups[1].img}
                        alt={groups[1].name}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="basis-3/5 min-h-0 bg-white shadow-cd">
                    <img
                        src={groups[0].img}
                        alt={groups[0].name}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}

export default GroupsIntro;
