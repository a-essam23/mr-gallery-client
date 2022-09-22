export default async function deleteOneCollection(folderName, token) {
    const del = await fetch(
        `http://127.0.0.1:5000/api/v1/folders//deleteAll/${folderName}`,
        {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
                withCredentials: true,
            },
        }
    )
        .then((res) => {
            if (res.ok) res.json();
            throw new Error("Delete failed");
        })
        .then((data) => {
            return true;
        })
        .catch((e) => {
            throw new Error(e.message);
        });
    return del;
}
