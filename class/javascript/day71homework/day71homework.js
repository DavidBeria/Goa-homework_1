let number = document.getElementById('num')
let plus = document.getElementById('plus')
let reset = document.getElementById('reset')
let minus = document.getElementById('minus')
let numberJs = 0

function numberdis() {
    number.textContent = numberJs
}

plus.addEventListener('click', () =>{
    numberJs++
    numberdis()
})

minus.addEventListener('click', () =>{
    numberJs--
    numberdis()
})

reset.addEventListener('click', () =>{
    numberJs = 0
    numberdis()
})