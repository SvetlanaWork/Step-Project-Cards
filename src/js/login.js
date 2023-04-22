import cardRender from "./cardRender.js";
import getCards from "./getCards.js";
import { signInBtn, signOutBtn, createVisitBtn } from "./main.js";

export default function login(token) {
        if(token !== "Incorrect username or password") {
            localStorage.setItem("token", token)
            getCards(token).then(cards => {
                const cardArr = JSON.parse(cards);
                cardRender(cardArr)
            })
            signInBtn.style.display = "none"
            signOutBtn.style.display = "block"
            createVisitBtn.style.display = "block"
        }
}
