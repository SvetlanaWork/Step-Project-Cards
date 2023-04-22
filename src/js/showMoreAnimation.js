export default function showMore() {
    let container = document.querySelector('#container')
    container.addEventListener('click', (elem) =>{
        if (elem.target.classList.contains('card-item-btn-show')){
            elem.preventDefault()
            let text = elem.target.parentElement.children
            for (let textElement of text) {
                if (!textElement.classList.contains('card-item-text-hidden') && textElement.classList.contains('card-item-text')) {
                    textElement.classList.add('text-animation-slide-up')
                }
                if (textElement.classList.contains('card-item-text-hidden')) {
                    textElement.classList.add('text-animation-fade')
                    textElement.classList.remove('card-item-text-hidden')
                }
            }
            elem.target.remove()
        }
    })
}
showMore()
