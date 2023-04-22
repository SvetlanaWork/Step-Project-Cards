import Visit from "./Visit.js";
import Modal from "./Modal.js";
import Function from './functions.js'
import createElement from "./functions.js";
import createName from "./check.js";
import showText from "./showText.js";

import {myToken} from "./main";
import changeBoxDone from "./changeBoxDone.js";


export default class Card{
    constructor(data) {
        const {id,object,value, status} = data
        this.status = status
        this.id = id
        this.object = object
        this.value = value
        const {fname, purpose,desc,select,visit,age, index, pressure,diseases} = this.object;
        this.fname = fname
        this.purpose = purpose
        this.desc = desc
        this.select = select
        this.visit = visit
        this.age = age
        this.index = index
        this.pressure = pressure
        this.diseases = diseases
    }
    createCard(){
        const listItem = createElement('li', 'card-item', `card-${this.id}`)
        const fullName = createElement("p", "card-item-text", "", `Full Name : ${this.fname}`)
        const doctorName = createElement('p', "card-item-text", '', `Doctor's Name : ${this.value}`)
        const purposeVisit = createElement('p', "card-item-text card-item-text-hidden", "", `Purpose of the visit : ${this.purpose}`)
        const shortDescr = createElement('p', "card-item-text card-item-text-hidden", "", `Brief description of the visit : ${this.desc}`)
        const urgencyVisit = createElement('p', "card-item-text card-item-text-hidden", "", `The urgency of the visit : ${this.select}`)
        let lastVisit = createElement('p', 'card-item-text card-item-text-hidden', '', `Date of last visit: ${this.visit}`)
        let patientAge = createElement('p', "card-item-text card-item-text-hidden", "", `Patient age : ${this.age}`)
        let indexMass = createElement('p', 'card-item-text card-item-text-hidden', '', `Body mass index : ${this.index}`)
        let normalPressure = createElement('p', 'card-item-text card-item-text-hidden', '', `Normal pressure : ${this.pressure}`)
        let pastDiseases = createElement('p', 'card-item-text card-item-text-hidden', '', `Past diseases : ${this.diseases}`)
        listItem.append(fullName,doctorName,purposeVisit,shortDescr,urgencyVisit)
        if (this.value === 'Dentist'){
            listItem.append(lastVisit)
        }
        if (this.value === 'Therapist'){
            listItem.append(patientAge)
        }
        if (this.value === 'Cardiologist'){
            listItem.append(patientAge,indexMass,normalPressure,pastDiseases)
        }
        let btnShow = createElement('a', 'card-item-btn-show', '', 'Show more')
        let btnDel = createElement('a', 'card-item-btn-delete', '', '×')
        btnDel.addEventListener('click', this.deleteCard.bind(this))

        btnDel.addEventListener('click', () => {
            this.renderEditCard.bind(this)
            showText()
        })

        let btnEdit = createElement('a', 'card-item-btn-edit', '', '⚙')
        btnEdit.addEventListener('click', this.renderEditCard.bind(this))

        let checkBoxDone = createName("input", "done", "done-checkbox")
        checkBoxDone.type = 'checkbox'
        checkBoxDone.addEventListener('change', () => changeBoxDone(event.target, this.id))
        const checkboxState = localStorage.getItem(this.id);
        if (checkboxState) {
            checkBoxDone.checked = true;
        }
        let labelForCheckBoxDone = createName('label',"label", 'label-done')
        labelForCheckBoxDone.textContent = 'Done'
        listItem.append(btnShow,btnDel,btnEdit, checkBoxDone, labelForCheckBoxDone)
        console.log(this.status)
        return listItem
    }
    deleteCard() {
        fetch(`https://ajax.test-danit.com/api/v2/cards/${this.id}`, {
            method: 'DELETE',
            headers:{
                'Authorization': `Bearer ${myToken}`
            }
        })
            .then(response => {
                if (response.status === 200) {
                    document.getElementById(`card-${this.id}`).remove();
                }
            })
    }
    renderEditCard(){
        let modal = new Modal()
        modal.render()
        let modalWindow = document.querySelector('.modal')
        const formEdit = document.createElement("form");
        formEdit.classList.add('form-card-edit')
        formEdit.name = "myForm";
        let inputFullName = createName("input", "fname", "input-value")
        inputFullName.value = this.fname;
        let inputPurpose = createName("input", "purpose", "input-value");
        inputPurpose.value = this.purpose;
        let inputDescription = createName("input", "desc", "input-value");
        inputDescription.value = this.desc;
        formEdit.append(inputFullName,inputPurpose,inputDescription)
        let visitSelect = new Visit()
        formEdit.append(visitSelect.renderSelect(this.select))
        document.getElementsByName('select').value = this.select
        if (this.value === 'Dentist'){
            let input2 = createName("input", "visit", "input-value")
            input2.value = this.visit
            formEdit.append(input2)
        }
        if (this.value === 'Therapist'){
            let inputage = createName("input", "age", "input-value")
            inputage.value = this.age
            inputage.type = "number"
            formEdit.append(inputage)
        }
        if (this.value === 'Cardiologist'){
            let inputage = createName("input", "age", "input-value")
            let inputpressure = createName("input", "pressure",  "input-value")
            let inputindex = createName("input", "index",  "input-value")
            let inputdiseases = createName("input", "diseases",  "input-value")
            inputage.value = this.age
            inputage.type = "number"
            inputpressure.value = this.pressure
            inputindex.value = this.index
            inputdiseases.placeholder = this.diseases
            formEdit.append(inputage,inputpressure,inputindex,inputdiseases)
        }
        let btn = document.createElement("button");
        btn.id = "btn"
        btn.className = "btn"
        btn.textContent = "Change"
        btn.addEventListener('click', this.postEditCard.bind(this))
        formEdit.append(btn)
        modalWindow.append(formEdit)
    }
    async postEditCard(e){
        e.preventDefault()
        let validation = true
        const forms = [...document.forms["myForm"]].forEach(el => {

            if (!el.value && el !== document.forms["myForm"].querySelector("button")) {
                el.style.border = "red 1px solid"
                validation = false
            }
        })
        if (validation) {
            const object = Object.fromEntries(new FormData(document.forms["myForm"]))
            const value = this.value
            const response = await fetch(`https://ajax.test-danit.com/api/v2/cards/${this.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${myToken}`
                },
                body: JSON.stringify({object, value})
            })
            const result = await response.json()
            let oldCard = document.querySelector(`#card-${this.id}`)
            const card = new Card(result)
            oldCard.after(card.createCard())
            oldCard.remove()
            document.querySelector('.modal').remove()
            document.querySelector('.background').remove()
        }
    }
}
