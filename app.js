const TicTac = document.querySelectorAll(".game-square")
const firsty = document.getElementById('game-heading')
const rest = document.getElementById('restart-button')
const first = document.querySelectorAll(".first-row")
const second = document.querySelectorAll(".second-row")
const third = document.querySelectorAll(".third-row")

let player = true

TicTac.forEach((item, index) => {
    item.addEventListener("click", (e) => {
        rest.style.display = "block"
        if (player) {

            firsty.textContent = "Players 2's Turn"
            item.textContent = 'X'
            player = false
            item.disabled = true

        } else {
            firsty.textContent = "Players 1's Turn"
            item.textContent = 'O'
            player = true
            item.disabled = true
        }
    })

    rest.addEventListener("click", () => {
        item.textContent = ""
        if (rest.style.display = "block") {
            rest.style.display = "none"
            firsty.textContent = "Players 1's Turn"
            item.disabled = false
            player = true
        }
    })
    let all = []

    all.push(first)
    all.push(second)
    all.push(third)


    let b00 = all[0][0].textContent
    let b01 = all[0][1].textContent
    let b02 = all[0][2].textContent
    let b10 = all[1][0].textContent
    let b11 = all[1][1].textContent
    let b12 = all[1][2].textContent
    let b20 = all[2][0].textContent
    let b21 = all[2][1].textContent
    let b22 = all[2][2].textContent
})

