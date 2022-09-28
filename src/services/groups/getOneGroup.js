export default async function getOneGroup(groupName) {
    const data = await fetch(`/api/v1/group/${groupName}`, {
        method: "GET",
    })
        .then((res) => {
            console.log(res);
            if (res.ok) return res.json();
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
