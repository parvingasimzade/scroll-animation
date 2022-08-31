const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', chechBoxes)

checkBoxes()

function chechBoxes() {
        const triggerBottom = window.innerHeight / 5 * 4

        boxes.forEach(box => {
                const boxTop = box.getBoundingClientRect().top

                if(boxTop < triggerBottom) {
                        box.classList.add('show')
                } else {
                        box.classList.remove('show')
                }
        })
}