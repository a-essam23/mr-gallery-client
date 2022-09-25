export default async function deleteOneCollection(folderName, token) {
    const del = await fetch(
        `${process.env.REACT_APP_SERVERHOST}/api/v1/folders//deleteAll/${folderName}`,
        {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
                withCredentials: true,
            },
        }
    )
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
