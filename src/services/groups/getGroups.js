export default async function getGroups() {
    const data = await fetch(
        `${process.env.REACT_APP_SERVERHOST || ""}/api/v1/group`
    )
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            return data?.data?.doc || [];
        })
        .catch((e) => {
            return [];
        });

    return data;
}
