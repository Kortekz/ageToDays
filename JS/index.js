// Age to days

// declaring variables
let display = document.querySelector('[data-display]')
let btn = document.querySelector('[data-btn]')
btn.addEventListener('click', age)

// funtion to calulate and display minutes to seconds
function age(){
    let input = document.querySelector('[data-age]').value
    let calc = eval (`${input} * 365.25`)
    display.value = calc.toFixed(2)
}
// makes the input display read only
document.querySelector('[data-display]').readOnly = true