import createElement from "./functions.js";
import createName from "./check.js";
import Card from "./Card.js";
import {myToken, visitText} from "./main";


export default class Visit {
    constructor() {
        this.inputFullName = createName("input", "fname", "input-value")
        this.inputFullName.placeholder = "full name";
        this.inputPurpose = createName("input", "purpose", "input-value");
        this.inputPurpose.placeholder = "purpose of the visit";
        this.inputDescription = createName("input", "desc", "input-value");
        this.inputDescription.placeholder = "brief description of the visit";
        this.form = createElement("form", "form-data", "form-data")
        this.form.name = "myForm";
        this.btn = document.createElement("button");
        this.btn.id = "btn"
        this.btn.className = "btn"
        this.btn.textContent = "Create"

        this.select = this.renderSelect()
        this.btn.addEventListener("click", async (e) => {
            e.preventDefault()
            visitText.style.display = "none"
            let validation = true
            const forms = [...document.forms["myForm"]].forEach(el => {
                if (!el.value && el !== document.forms["myForm"].querySelector("button")) {
                    el.style.border = "red 1px solid"
                    validation = false
                }
            })
            // if (validation) {
            //     const object = Object.fromEntries(new FormData(document.forms["myForm"]))
            //     const value = select.value
            //     fetch("https://ajax.test-danit.com/api/v2/cards", {
            //         method: 'POST',
            //         headers: {
            //             'Content-Type': 'application/json',
            //             'Authorization': `Bearer ${"464e6953-9bee-4161-8c7b-f08e884f4e8f"}`
            //         },
            //         body: JSON.stringify({object, value})
            //     })
            //     .then(response => response.json())
            //     .then(response => console.log(response))
            // }
            if (validation) {
                const object = Object.fromEntries(new FormData(document.forms["myForm"]))
                const value = select.value
                const status = "In progress";
                const response = await fetch("https://ajax.test-danit.com/api/v2/cards", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${myToken}`
                    },
                    body: JSON.stringify({object, value, status})
                })
                
                const result = await response.json()
                let list = document.querySelector('.card-list')
                const card = new Card(result)
                list.append(card.createCard(result))
                document.querySelector('.modal').remove()
                document.querySelector('.background').remove()
            }
        })
    }



    renderSelect(editValue) {
        const dropdownField = ["normal", "priority", "urgent"];
        this.select = document.createElement("select");
        this.select.name = "select";
        this.select.id = "input-value";
        this.optionHidden = document.createElement("option");
        if (editValue){
            this.optionHidden.text = `${editValue}`
        }else {
            this.optionHidden.text = "Urgency of the visit";
        }
        if (editValue){
            this.optionHidden.value = editValue
        }else {
            this.optionHidden.value = "";
        }
        this.optionHidden.hidden = true;
        this.select.add(this.optionHidden);
        dropdownField.forEach(el => {
            const option = document.createElement("option");
            option.value = el;
            option.text = el;
            option.id = "option";
            this.select.add(option);
        })
        return this.select
    }

}