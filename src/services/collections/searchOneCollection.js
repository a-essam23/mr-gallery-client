export default async function searchOneCollection(folderName) {
    const data = await fetch(
        `${
            process.env.REACT_APP_SERVERHOST || ""
        }/api/v1/folders?folderName=${folderName}`,
        {
            method: "GET",
        }
    )
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            return data?.data?.doc || {};
        })
        .catch((e) => {
            throw new Error(e.message);
        });
    return data;
}
