export default async function getOneCollection(groupName) {
    const data = await fetch(
        `${process.env.SERVERHOST}/api/v1/folders/${groupName}`,
        {
            method: "GET",
            headers: {
                withCredentials: true,
            },
        }
    )
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            return data?.data.images || [];
        })
        .catch((e) => {
            throw new Error(e.message);
        });
    return data;
}
