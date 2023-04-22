import Card from "./Card.js";
import { listCard, visitText } from "./main.js";

export default function cardRender(cards){
    listCard.innerHTML =""
    if(cards.length !==0) {
        visitText.style.display = "none"
        cards.forEach(item => {
            const card = new Card(item)
            listCard.append(card.createCard())
        });
    }
}