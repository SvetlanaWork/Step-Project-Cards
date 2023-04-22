export default function getCards(token){
    return fetch("https://ajax.test-danit.com/api/v2/cards", {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${token}`
          }
    })
    .then(response => response.text())
    .catch(err => console.log(err))
}