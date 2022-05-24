const colorElements = document.getElementsByClassName('color')
const rangeElements = document.getElementsByClassName('range')
const numberElements = document.getElementsByClassName('number')
const selectElements = document.getElementsByClassName('select')

for(var i = 0; i < colorElements.length; i++) {
    var colorElement = colorElements[i]
        colorElement.addEventListener('input', changeColor)
}

for(var i = 0; i < rangeElements.length; i++) {
    var rangeElement = rangeElements[i]
        rangeElement.addEventListener('input', changeRange)
}

for(var i = 0; i < numberElements.length; i++) {
    var numberElement = numberElements[i]
        numberElement.addEventListener('input', changeNumber)
}

for(var i = 0; i < selectElements.length; i++) {
    var selectElement = selectElements[i]
        selectElement.addEventListener('input', selectPosition)
}

function changeColor(e) {
    document.documentElement.style.setProperty(`--${e.target.name}`, e.target.value)
}

function changeRange(e) {
    document.documentElement.style.setProperty(`--${e.target.name}`, e.target.value)
    var currentRange = e.target 
    var nextSibling = currentRange.nextElementSibling
        nextSibling.value = currentRange.value
}

function changeNumber(e) {
    document.documentElement.style.setProperty(`--${e.target.name}`, e.target.value)
    var currentNumber = e.target
    var previousSibling = currentNumber.previousElementSibling
        previousSibling.value = currentNumber.value
}

function selectPosition(e) {
    document.documentElement.style.setProperty(`--${e.target.name}`, e.target.value)
}
