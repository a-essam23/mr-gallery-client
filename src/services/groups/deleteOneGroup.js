export default async function deleteOneGroup(name, token) {
    const del = await fetch(
        `${process.env.REACT_APP_SERVERHOST || ""}/api/v1/group/${name}`,
        {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
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
