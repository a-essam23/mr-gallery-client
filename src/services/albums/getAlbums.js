export default function getAlbums() {
    const albums = fetch("http://127.0.0.1:5000/api/v1/image/")
        .then((res) => {
            if (res.ok) return res.json();
            throw new Error("Something went wrong...");
        })
        .then((data) => {
            return data?.data?.doc || [];
        })
        .catch((e) => {
            throw new Error(e.message);
        });
    return albums;
}
