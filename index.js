/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputNumber = document.getElementById("input-number")
const convertBtn = document.getElementById("convert-btn")
const resultsLength = document.getElementById("results-length")
const resultsVolume = document.getElementById("results-volume")
const resultsMass = document.getElementById("results-mass")
const themeSwitch = document.getElementById("theme-switch")

convertBtn.addEventListener("click", unitConversion)

themeSwitch.addEventListener("click", () => {
    document.body.classList.toggle("darkmode")
})

function unitConversion() {
    const value = inputNumber.value

    if (isPositiveNumber(value)) {
        resultsLength.innerHTML = `<p>
            ${value} meters = ${(value * 3.281).toFixed(3)} feet | 
            ${value} feet = ${((1 / 3.281) * value).toFixed(3)} meters
        </p>`
    
        resultsVolume.innerHTML = `<p>
            ${value} liters = ${(value * 0.264).toFixed(3)} gallons | 
            ${value} gallons = ${((1 / 0.264) * value).toFixed(3)} liters
        </p>`
    
        resultsMass.innerHTML = `<p>
            ${value} kilos = ${(value * 2.204).toFixed(3)} pounds | 
            ${value} pounds = ${((1 / 2.204) * value).toFixed(3)} kilos
        </p>`
    } else {
        alert("Must input number")
    }
    
}

function isPositiveNumber(value) {
    const number = parseFloat(value)
    return !isNaN(number) && number > 0
}