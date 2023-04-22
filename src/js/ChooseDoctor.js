import Modal from "./Modal.js";
import VisitDentist from "./Dentist.js";
import VisitTherapist from "./Therapist.js";
import VisitCardiologist from "./Cardiologist.js"
import createElement from "./functions.js";
const listOfDoctors = ["Dentist", "Therapist", "Cardiologist"];


export default class ModalCreateList extends Modal {
    constructor() {
        super()

    }

    render() {
        super.render()
        this.createSelect()
    }

    createSelect() {
        this.select = createElement("select", "input", "select")
        this.optionHidden = document.createElement("option");
        this.optionHidden.text = "Choose doctor";
        this.optionHidden.hidden = true
        this.select.add(this.optionHidden);
        this.div = createElement("div", "push", "push")
        listOfDoctors.forEach(element => {
            const option = document.createElement("option");
            option.value = element;
            option.text = element;
            option.id = "option";
            this.select.add(option);
        })
        this.select.addEventListener("change", () => this.checkSelect())
        this.modal.append(this.select, this.div);
    }

    checkSelect() {
        if (select.value === "Dentist") {
            this.div.innerText = ""
            const visitDentist = new VisitDentist().render()
            this.div.append(visitDentist)
        } else if (select.value === "Therapist") {
            this.div.innerText = ""
            const visitTherapist = new VisitTherapist().render()
            this.div.append(visitTherapist)
        } else if (select.value === "Cardiologist") {
            this.div.innerText = ""
            const visitCardiologist = new VisitCardiologist().render()
            this.div.append(visitCardiologist)
        }
        const forms = [...document.forms["myForm"]].forEach(el => {
            if (el !== document.forms["myForm"].querySelector("button")) {
                el.addEventListener("input", () => {
                    el.style.background = "white"
                })
            }
        })
    }

}