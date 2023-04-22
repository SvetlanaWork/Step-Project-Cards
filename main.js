import LoginForm from "./js/LoginForm.js";
import login from "./js/login.js";
import getCards from "./js/getCards.js";
import logOut from "./js/logOut.js";

// import ModalCreateList from "./js/ChooseDoctor.js"

export const createVisitBtn = document.getElementById("create-visit");
export const signInBtn = document.getElementById("sign-in");
export const signOutBtn = document.getElementById("sign-out");
export let myToken

const loginForm = new LoginForm("login-form", ["login-form"], "Sign in")
signInBtn.addEventListener("click", () => {
    document.body.append(loginForm.render(loginForm.createFormLogin()))
})

signOutBtn.addEventListener("click", ()=>{
    logOut()
})

createVisitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const modal = new ModalCreateList().render()
})

window.addEventListener("load", () => {
    if(localStorage.getItem("token")){
     myToken = localStorage.getItem("token")
     login(myToken)
     getCards(myToken)
    }
})
