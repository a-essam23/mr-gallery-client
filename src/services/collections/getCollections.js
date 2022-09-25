export default function getCollections() {
    console.log(process.env.SERVER);
    const collections = fetch(`${process.env.SERVERHOST}/api/v1/folders/`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            return data?.data?.doc || [];
        })
        .catch((e) => {
            throw new Error(e.message);
        });
    return collections;
}
