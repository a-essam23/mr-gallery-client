import { Button } from "antd";
import { useParams } from "react-router-dom";
import { v4 } from "uuid";
import {
    CollectionWithOptions,
    CustomForm,
    Grid,
    Searchbar,
} from "../../components";
import { AdminLayout } from "../../layouts";
import getOneGroup from "../../services";

let collections = [
    {
        images: [],
        _id: "631cb0e30da27c9ed079b71f",
        folderName: "AB",
        imageCover:
            "https://i.pinimg.com/564x/16/20/70/1620701dc548351544098080a7711112.jpg",
    },
    {
        images: [],
        _id: "631cb1990da27c9ed079b72a",
        folderName: "AA",
        imageCover:
            "https://i.pinimg.com/564x/95/c6/1e/95c61e7f08be9e6a5d73e389ff861748.jpg",
    },
    {
        images: [],
        _id: "631cb0e30da27c9ed079b71f",
        folderName: "AB",
        imageCover:
            "https://i.pinimg.com/564x/16/20/70/1620701dc548351544098080a7711112.jpg",
    },
    {
        images: [],
        _id: "631cb1990da27c9ed079b72a",
        folderName: "AA",
        imageCover:
            "https://i.pinimg.com/564x/95/c6/1e/95c61e7f08be9e6a5d73e389ff861748.jpg",
    },
    {
        images: [],
        _id: "631cb0e30da27c9ed079b71f",
        folderName: "AB",
        imageCover:
            "https://i.pinimg.com/564x/16/20/70/1620701dc548351544098080a7711112.jpg",
    },
    {
        images: [],
        _id: "631cb1990da27c9ed079b72a",
        folderName: "AA",
        imageCover:
            "https://i.pinimg.com/564x/95/c6/1e/95c61e7f08be9e6a5d73e389ff861748.jpg",
    },
    {
        images: [],
        _id: "631cb0e30da27c9ed079b71f",
        folderName: "AB",
        imageCover:
            "https://i.pinimg.com/564x/16/20/70/1620701dc548351544098080a7711112.jpg",
    },
    {
        images: [],
        _id: "631cb1990da27c9ed079b72a",
        folderName: "AA",
        imageCover:
            "https://i.pinimg.com/564x/95/c6/1e/95c61e7f08be9e6a5d73e389ff861748.jpg",
    },
    {
        images: [],
        _id: "631cb0e30da27c9ed079b71f",
        folderName: "AB",
        imageCover:
            "https://i.pinimg.com/564x/16/20/70/1620701dc548351544098080a7711112.jpg",
    },
    {
        images: [],
        _id: "631cb1990da27c9ed079b72a",
        folderName: "AA",
        imageCover:
            "https://i.pinimg.com/564x/95/c6/1e/95c61e7f08be9e6a5d73e389ff861748.jpg",
    },
];

export default function AdminCollectionpage() {
    const mylocation = useParams();
    collections = collections.map((collection) => ({
        ...collection,
        url: `/admin/${mylocation.group}/${collection.folderName}`,
    }));

    // useEffect(() => {
    //     getOneGroup("models").then((collections) => console.log(collections));
    // }, []);
    return (
        <AdminLayout>
            <CustomForm></CustomForm>
            <div className="flex items-center">
                <Searchbar></Searchbar>
                <Button type="primary" size="large" className="bg-blue-600">
                    Add Collection
                </Button>
            </div>
            <Grid>
                {collections.map((collection) => (
                    <CollectionWithOptions key={v4()} data={collection} />
                ))}
            </Grid>
        </AdminLayout>
    );
}
