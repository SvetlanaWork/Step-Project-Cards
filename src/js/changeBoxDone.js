import {myToken} from "./main";


export default async function changeBoxDone(target, id){
    const checkBox = target
    if (checkBox.checked) {
        localStorage.setItem(id, true);
    } else {
        localStorage.removeItem(id);
    }
    const checkboxState = localStorage.getItem(id);
    if (checkboxState) {
        checkBox.checked = true;
    }

}

// export default async function changeBoxDone(status, id, object, value){
//     if (status === "In progress"){
//         status = 'Done'
//     }
//     const response = await fetch(`https://ajax.test-danit.com/api/v2/cards/${id}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${myToken}`
//         },
//         body: JSON.stringify({object, value, status})
//     })
//     let result = await response.json()
//     console.log(result)
//
//     const responseCard = await fetch(`https://ajax.test-danit.com/api/v2/cards/${id}`,{
//         method: 'GET',
//         headers:{
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${myToken}`
//         }
//     })
//     let card = await responseCard.json()
//     console.log(card)
//
// }