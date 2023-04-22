import cardRender from "./cardRender.js"
import getCards from "./getCards.js"

import { myToken, visitText} from "./main.js"

export default function filter() {

    function myFilter(arr, prop, value) {
        const result = []
        arr.forEach(item => {
            if(item.object[prop].includes(value)) {
                result.push(item)
            }
        })
        return result
    }



    const filterBox = document.querySelector(".search")
    filterBox.addEventListener("input", () => {
        const searchInput = document.getElementById("search").value
        const urgency = document.getElementById("visit-urgency").value
        const visitStatus = document.getElementById("visit-status").value
        getCards(myToken).then(cards => {
            const cardArr = JSON.parse(cards);
            let filterList = [...cardArr]
            filterList = myFilter(filterList, "desc", searchInput)
            filterList = myFilter(filterList, "select", urgency)
            function filterDone(){
                let result = []
                filterList.forEach(el => {
                    let {id} = el
                    if (visitStatus === 'Done' && localStorage.getItem(id)){
                        result.push(el)
                    }else if (visitStatus === 'In progress' && !localStorage.getItem(id)){
                        result.push(el)
                    }else if (visitStatus === ''){
                        result.push(el)
                    }
                })
                return result
            }
            filterList = filterDone()
            if(filterList.length === 0) {
                visitText.style.display = "block"
            }
            cardRender(filterList)
         });

    })
}