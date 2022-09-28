export default async function updateOne(payload, token) {
    var data = new FormData();
    for (const [key, value] of Object.entries(payload)) {
        data.append(key, value);
    }

    await fetch(`${process.env.REACT_APP_SERVERHOST}/api/v1/group`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        method: "POST",
        body: data,
    })
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
                throw new Error("Update failed...");
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
