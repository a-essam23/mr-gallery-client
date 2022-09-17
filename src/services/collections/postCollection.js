export default async function postCollection(body, token) {
    await fetch("http://127.0.0.1:5000/api/v1/folders", {
        headers: {
            Authorization: `Bearer ${token}`,
            withCredentials: true,
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(body),
    })
        .then((res) => {
            console.log(res);
            if (res.ok) {
                return res.json();
            }
            if (res.status === 409) {
                throw new Error(res.statusText);
            }
            if (res.status === 401) {
                /// DELETE CONTEXT SIGN OUT!
                throw new Error("Token expired... please log in again..");
            }
            throw new Error(res.statusText || "Something went wrong...");
        })
        .then(() => {
            return true;
        })
        .catch((e) => {
            throw new Error(e.message);
        });

    return;
}
