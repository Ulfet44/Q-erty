const TicTac = document.querySelectorAll(".game-square")
const firsty = document.getElementById('game-heading')
const rest = document.getElementById('restart-button')
const first = document.querySelectorAll(".first-row")
const second = document.querySelectorAll(".second-row")
const third = document.querySelectorAll(".third-row")

let player = true

TicTac.forEach((item) => {
    let any = []
    any.push(item.textContent)
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
        if (any[0] == any[1] && any[1] == any[2] && any[1] !== " ") {
            item.disabled = true
        }
    

})