export default async function login({ email, password }) {
    await fetch("api/v1/admin/login", {
        method: "POST",
        body: { email, password },
    })
        .then((res) => res.json())
        .then((data) => {
            return data;
        });
}
