export default async function deleteOneAlbum(code, token) {
    const del = await fetch(`/api/v1/image/${code}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`,
            withCredentials: true,
        },
    })
        .then((res) => {
            if (res.ok) return;
            throw new Error("Delete failed");
        })
        .then((data) => {
            return;
        })
        .catch((e) => {
            throw new Error(e.message);
        });
    return del;
}
