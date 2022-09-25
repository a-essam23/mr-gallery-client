export default async function getGroups() {
    const data = await fetch(`${process.env.SERVERHOST}/api/v1/group`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            return data?.data?.doc || [];
        })
        .catch((e) => {
            return e?.message;
        });

    return data;
}
