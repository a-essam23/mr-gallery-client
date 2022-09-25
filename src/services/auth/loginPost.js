export default async function loginPost(data) {
    const result = await etch(`${process.env.SERVERHOST}api/v1/admin/login`, {
        headers: {
            withCredentials: true,
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
    })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }

            if (res.status === 401) {
                throw new Error("Wrong username or password...");
            } else {
                throw new Error("Something went wrong...");
            }
        })
        .then((result) => {
            return { user: result.data.user, token: result.token };
        })
        .catch((e) => {
            throw new Error(e.message);
        });
    return result;
}
