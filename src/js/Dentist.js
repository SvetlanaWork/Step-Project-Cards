import Visit from "./Visit.js";
import createName from "./check.js";



export default class VisitDentist extends Visit {
    constructor() {
        super()
     
    }

    createVisitDentist() {
        this.input2 = createName("input", "visit", "input-value")
        this.input2.placeholder = "dd/mm"
        return this.input2
    }

    render() {
        const select = new Visit().renderSelect()
        const c = this.createVisitDentist()
        this.form.append(this.inputFullName, this.inputPurpose, this.inputDescription, this.select, c, this.btn)
        return this.form
    }
}