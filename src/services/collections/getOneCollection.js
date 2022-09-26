export default async function getOneCollection(groupName) {
    const data = await fetch(
        `${process.env.REACT_APP_SERVERHOST}/api/v1/folders/${groupName}`,
        {
            method: "GET",
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
