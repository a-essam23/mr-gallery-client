export default function getAlbums(query = "") {
    const albums = fetch(
        `${process.env.REACT_APP_SERVERHOST || ""}/api/v1/image/${query}`
    )
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
