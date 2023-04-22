import getCards from "./getCards";
import { myToken, visitText } from "./main";

export default function showText() {
    getCards(myToken).then(cards => {
        const cardArr = JSON.parse(cards);
        if(cardArr.length === 1) {
            visitText.style.display = "block"
        }
    })

}