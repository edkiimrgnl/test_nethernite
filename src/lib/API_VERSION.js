
export function callForPackageVersion(name, type) {
    const API_VERSION = `https://data.jsdelivr.com/v1/package/${type}/${name}`;

    return fetch(API_VERSION)
        .then(res => res.json())
        .catch(e => {
            console.log(e);
        });
}