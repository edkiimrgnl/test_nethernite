
export function callForPackage(pack, type, version) {
    const API_PACK = `https://data.jsdelivr.com/v1/package/${type}/${pack}@${version}`;

    return fetch(`${API_PACK}`)
        .then(res => res.json())
        .catch(e => {
            console.log(e);
        });
}