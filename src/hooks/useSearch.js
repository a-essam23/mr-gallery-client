import { searchOneAlbum } from "../services";

export default async function useSearch({
    data: [type, value],
    onSuccess,
    onFail,
}) {
    if (type === "model") {
        await searchOneAlbum(value)
            .then((data) => {
                onSuccess(data);
            })
            .catch((e) => {
                onFail(e);
            });
    }
    if (type === "collection") {
    }
    return;
}
