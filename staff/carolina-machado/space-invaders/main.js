const ship = document.getElementById('ship')

let x = 0
let y = 0

ship.style.left = x + 'vw'
ship.style.top = y + 'vh'


document.onkeydown = function (event) {
    if (event.key === 'ArrowLeft' && x > 0)
        x = x - 1
    else if (event.key === 'ArrowRight' && x < 95)
        x = x + 1
    else if (event.key === 'ArrowUp' && y > 0)
        y = y - 1
    else if (event.key === 'ArrowDown' && y < 90)
        y = y + 1

    ship.style.left = x + 'vw'
    ship.style.top = y + 'vh'
}

const enemieGroup = document.getElementById('alien')
const enemieSole = document.getElementsByClassName('enemies')


Element.getBoundingClientRect('ship') 

