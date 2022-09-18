export default async function getGroups() {
    const data = await fetch("http://127.0.0.1:5000/api/v1/group")
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
