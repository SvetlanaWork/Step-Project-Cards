import { signInBtn, signOutBtn, createVisitBtn, visitText, listCard } from "./main.js";

export default function logOut(){
    listCard.innerHTML =""
    localStorage.removeItem("token")
    signInBtn.style.display = "block"
    signOutBtn.style.display = "none"
    createVisitBtn.style.display = "none"
    visitText.style.display = "block"
}