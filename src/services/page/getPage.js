export default async function getPage(pageName) {
    const data = await fetch(
        `${process.env.REACT_APP_SERVERHOST || ""}/api/v1/${pageName}`,
        {
            method: "GET",
        }
    )
        .then((res) => {
            console.log(res);
            if (res.ok) return res.json();
            throw new Error(res.statusText);
        })
        .then((data) => {
            console.log(data);
            return data.data || [];
        })
        .catch((e) => {
            throw new Error(e.message);
        });
    return data;
}
