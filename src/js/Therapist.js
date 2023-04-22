import Visit from "./Visit.js";
import createName from "./check.js";

export default class VisitTherapist extends Visit {
    constructor() {
        super()

    }


    createVisitTherapist() {
        this.inputage = createName("input", "age", "input-value")
        this.inputage.placeholder = "age"  
        this.inputage.type = "number"
        return this.inputage
    }

    
    render() {
        const select = new Visit().renderSelect()
        const a = this.createVisitTherapist()
        this.form.append(this.inputFullName, this.inputPurpose, this.inputDescription, this.select, a, this.btn)
        return this.form
    }


}