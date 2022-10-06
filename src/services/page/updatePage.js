export default async function updatePage(pageId, payload = {}, token) {
    let data = new FormData();
    for (let item of payload) {
        data.append(item, payload[item]);
    }

    await fetch(
        `${process.env.REACT_APP_SERVERHOST || ""}/api/main/${pageId}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            method: "POST",
            body: data,
        }
    )
        .then((res) => {
            console.log(res);
            return res.json();
        })
        .then((data) => {
            const error = data.error;
            if (!error) {
                return;
            }
            if (error.statusCode === 409) {
                throw new Error(
                    "Group name already exists... please choose another"
                );
            }
            if (error.statusCode === 401) {
                /// DELETE CONTEXT SIGN OUT!
                throw new Error("Token expired... please log in again..");
            }
            throw new Error("Something went wrong...");
        })
        .catch((e) => {
            throw new Error(e.message);
        });

    return;
}
