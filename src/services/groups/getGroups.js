export default async function getGroups() {
    const data = await etch(`${process.env.SERVERHOST}api/v1/group`)
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
