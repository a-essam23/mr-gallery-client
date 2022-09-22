export default async function getOneCollection(groupName) {
    const data = await fetch(
        `http://127.0.0.1:5000/api/v1/folders/${groupName}`,
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
