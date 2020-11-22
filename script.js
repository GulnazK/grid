let grid = document.querySelectorAll('.grid-item')
    grid.forEach((gridElem,index) => {
 gridElem.addEventListener('click', () => {
     let step = 3
     clearActive()
     if (index >= grid.length - step) {
         index = index - grid.length
     }
     grid[index + step].classList.add('active')
 })
})

function clearActive() {
    grid.forEach(block => block.classList.remove('active'))
}