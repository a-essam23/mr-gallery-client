export default function getCollections() {
    const collections = fetch("http://127.0.0.1:5000/api/v1/folders/")
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
