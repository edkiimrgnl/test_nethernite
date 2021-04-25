const API_TOP = 'https://data.jsdelivr.com/v1/stats/packages';

export function apiCall() {
    return fetch(API_TOP)
        .then(res => res.json())
        .catch(e => {
            console.log(e);
        });
}