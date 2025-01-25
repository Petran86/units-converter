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

convertBtn.addEventListener("click", unitConversion)

function unitConversion() {
    const value = inputNumber.value
    const regex = /^[0-9]+$/

    if (value.match(regex)) {
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