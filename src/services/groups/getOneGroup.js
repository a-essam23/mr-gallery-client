export default async function getOneGroup(groupName) {
    const data = await fetch(
        `http://127.0.0.1:5000/api/v1/group/${groupName}`,
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
            console.log(data);
            return data.data?.data?.folders || [];
        })
        .catch((e) => {
            throw new Error(e.message);
        });
    return data;
}
