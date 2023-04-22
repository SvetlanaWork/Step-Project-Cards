import '../template.html';
import '../styles/main.scss';
import ModalCreateList from "./ChooseDoctor.js";
import LoginForm from "./LoginForm.js";
import login from "./login.js";
import logOut from "./logOut.js";
import showMore from "./showMoreAnimation.js";
import filter from "./filter.js";
filter()

export const createVisitBtn = document.getElementById("create-visit");
export const signInBtn = document.getElementById("sign-in");
export const signOutBtn = document.getElementById("sign-out");
export const listCard = document.querySelector('.card-list')
export const visitText = document.querySelector(".visits-text");

export let myToken

createVisitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const modal = new ModalCreateList().render()
})



// import ModalCreateList from "./js/ChooseDoctor.js"



// const loginForm = new LoginForm("login-form", ["login-form"], "Sign in")
// signInBtn.addEventListener("click", () => {
    
//     document.body.append(loginForm.render(loginForm.createFormLogin()))
// })


signInBtn.addEventListener("click", () => {

    new LoginForm("login-form", ["login-form"], "Sign in").render()
})

signOutBtn.addEventListener("click", ()=>{
    logOut()
})


window.addEventListener("load", () => {
    if(localStorage.getItem("token")){
     myToken = localStorage.getItem("token")
     login(myToken)
    }
})