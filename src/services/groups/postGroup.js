export default async function postGroup(
    { name, description, imageCover },
    token
) {
    var data = new FormData();
    data.append("name", name);
    data.append("description", description);
    data.append("imageCover", imageCover);

    await fetch("http://127.0.0.1:5000/api/v1/group", {
        headers: {
            Authorization: `Bearer ${token}`,
            withCredentials: true,
        },
        method: "POST",
        body: data,
    })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
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
