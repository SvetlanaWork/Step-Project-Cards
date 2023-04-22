import Modal from "./Modal.js";
import authentication from "./authentication.js";
import getCards from "./getCards.js"
import login from "./login.js";
import createElement from "./functions.js";

export default class LoginForm extends Modal {
	constructor(id, classes, header) {
        super(header);
        this.id = id;
		this.classes = classes;	
	}

	render() {
        super.render()
		this.createFormLogin()
    }

		createFormLogin = function () {

		const loginForm = createElement("form", this.classes, this.id)
		loginForm.action = "";

		const inputLogin = createElement("input", "input", "login")
		inputLogin.type = "email";
		inputLogin.placeholder = "Enter Login";
		inputLogin.required = "true";
    
		const inputPassword = createElement("input", "input", "password")
		inputPassword.type = "password";
		inputPassword.placeholder = "Enter Password";
		inputPassword.required = "true";

		const inputSubmit = createElement("button", "btn", "request-login", "Sign in")
		inputSubmit.type = "submit";

        loginForm.addEventListener("submit", (e)=> {
        e.preventDefault()
        authentication(inputLogin.value, inputPassword.value)
			.then(token => {
				login(token)
				getCards(token)
				this.background.remove()
				localStorage.setItem("token", token)
			})
  })
  loginForm.append(inputLogin, inputPassword, inputSubmit);
  this.modal.append(loginForm);
		
	};
}

