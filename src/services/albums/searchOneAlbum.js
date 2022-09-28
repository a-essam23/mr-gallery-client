export default async function searchOneAlbum(code) {
    const data = await fetch(
        `${process.env.REACT_APP_SERVERHOST || ""}}/api/v1/image?code=${code}`,
        {
            method: "GET",
        }
    )
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            return data?.data?.doc || {};
        })
        .catch((e) => {
            throw new Error(e.message);
        });
    return data;
}
