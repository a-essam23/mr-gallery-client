export default async function postGroup(body, token) {
    await fetch("http://127.0.0.1:5000/api/v1/group", {
        headers: {
            Authorization: `Bearer ${token}`,
            withCredentials: true,
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(body),
    })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            if (res.status === 409) {
                throw new Error("Group name already exists...");
            }
            if (res.status === 401) {
                /// DELETE CONTEXT SIGN OUT!
                throw new Error("Token expired... please log in again..");
            }
            throw new Error("Something went wrong...");
        })
        .then((data) => {
            console.log(data);
            return;
        })
        .catch((e) => {
            throw new Error(e.message);
        });

    return;
}
