import Visit from "./Visit.js";
import createName from "./check.js";




export default class VisitCardiologist extends Visit {
    constructor() {
        super()
 
    }

    createVisitTherapist() {
        this.div = document.createElement("div")
        this.div.id = "input-wrapper"
        this.inputage = createName("input", "age", "input-value")
        this.inputpressure = createName("input", "pressure",  "input-value")
        this.inputindex = createName("input", "index",  "input-value")
        this.inputdiseases = createName("input", "diseases",  "input-value")
        this.inputage.placeholder = "age"  
        this.inputage.type = "number"  
        this.inputpressure.placeholder = "normal pressure"  
        this.inputindex.placeholder = "BMI"  
        this.inputdiseases.placeholder = "past diseases" 
        this.div.append(this.inputage, this.inputindex, this.inputpressure, this.inputdiseases)
        return this.div
    }


    render() {
        const select = new Visit().renderSelect()
        const b = this.createVisitTherapist()
        this.form.append(this.inputFullName, this.inputPurpose, this.inputDescription, this.select, b, this.btn)
        return this.form
    }
}