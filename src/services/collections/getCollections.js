export default function getCollections() {
    const collections = fetch(`/api/v1/folders/`)
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
