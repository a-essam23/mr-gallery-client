export default async function getOneGroup(groupName) {
    const data = await fetch(
        `${process.env.REACT_APP_SERVERHOST}/api/v1/group/${groupName}`,
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
