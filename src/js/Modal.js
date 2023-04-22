import cross from '../assets/img/svg/cross.svg'


export default class Modal {
    constructor() {
        this.background = document.createElement("div");
        this.background.className = "background";
        this.modal = document.createElement("div");
        this.modal.className = "modal";
        this.cross = document.createElement("img");
        this.cross.className = "cross"
        this.cross.src = cross;
        this.modal.append(this.cross);
        this.background.append(this.modal);
        this.background.addEventListener("click", (e) => this.closeModal(e))
    }

    render() {
        document.body.append(this.background)
    }

    closeModal(e) {
        const target = e.target
        if(target === this.background || target.closest(".cross")) this.background.remove()
    }
}
