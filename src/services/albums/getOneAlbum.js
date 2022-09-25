export default async function getOneAlbum(code) {
    const data = await fetch(`http://127.0.0.1:5000/api/v1/image/${code}`, {
        method: "GET",
        headers: {
            withCredentials: true,
        },
    })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            return data?.data || {};
        })
        .catch((e) => {
            throw new Error(e.message);
        });
    return data;
}
