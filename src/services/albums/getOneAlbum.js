export default async function getOneAlbum(code) {
    const data = await fetch(`/api/v1/image/${code}`, {
        method: "GET",
        headers: {
            withCredentials: true,
        },
    })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            return data?.data || {};
        })
        .catch((e) => {
            throw new Error(e.message);
        });
    return data;
}
