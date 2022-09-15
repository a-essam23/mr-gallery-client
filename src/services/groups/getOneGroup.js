export default async function getOneGroup(groupName) {
    const data = await fetch(`http://127.0.0.1:5000/api/v1/group/${groupName}`)
        .then((res) => res.json())
        .then((data) => data.doc);
    return data;
}
