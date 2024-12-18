

const propertyDropdown = document.getElementById('property');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const inputValue = document.getElementById('inputValue');
const outputValue = document.getElementById('outputValue');
const inname = document.getElementById('inname');
const outname = document.getElementById('outname');

// Define conversion logic for each property and option
function convert() {
    const property = propertyDropdown.value;
    const input = parseFloat(inputValue.value);

    if (isNaN(input)) {
        outputValue.value = '';
        return;
    }

    let result;

    if (property === 'temperature') {
        if (option1.checked) {
            result = ((input * 9) / 5 + 32).toFixed(2) + ' °F';
            inname.textContent = "Celsius"
            outname.textContent = "Fahrenheit"
        } else if (option2.checked) {
            result = (((input - 32) * 5) / 9).toFixed(2) + ' °C';
            inname.textContent = "Fahrenheit"
            outname.textContent = "Celsius"
        }
    } else if (property === 'mass') {
        if (option1.checked) {
            result = (input * 2.20462).toFixed(2) + ' lbs';
            inname.textContent = "Kilograms"
            outname.textContent = "Pounds" // Kilograms to Pounds
        } else if (option2.checked) {
            result = (input / 2.20462).toFixed(2) + ' kg';
            inname.textContent = "Pounds"
            outname.textContent = "Kilograms" // Pounds to Kilograms
        }
    } else if (property === 'length') {
        if (option1.checked) {
            result = (input * 3.28084).toFixed(2) + ' ft';
            inname.textContent = "Meters"
            outname.textContent = "Feet" // Meters to Feet
        } else if (option2.checked) {
            result = (input / 3.28084).toFixed(2) + ' m';
            inname.textContent = "Feet"
            outname.textContent = "Meters" // Feet to Meters
        }
    } else if (property === 'speed') {
        if (option1.checked) {
            result = (input * 0.621371).toFixed(2) + ' mph';
            inname.textContent = "Kilometers/hour"
            outname.textContent = "Miles/hour" // Kilometers/hour to Miles/hour
        } else if (option2.checked) {
            result = (input / 0.621371).toFixed(2) + ' km/h';
            inname.textContent = "Miles/hour"
            outname.textContent = "Kilometers/hour" // Miles/hour to Kilometers/hour
        }
    } else if (property === 'volume') {
        if (option1.checked) {
            result = (input * 0.264172).toFixed(2) + ' gallons';
            inname.textContent = "Liters"
            outname.textContent = "Gallons" // Liters to Gallons
        } else if (option2.checked) {
            result = (input / 0.264172).toFixed(2) + ' liters';
            inname.textContent = "Gallons"
            outname.textContent = "Liters" // Gallons to Liters
        }
    }
    outputValue.value = result;
}

// Event Listeners
inputValue.addEventListener('input', convert);
propertyDropdown.addEventListener('change', () => {
    if (propertyDropdown.value === 'temperature') {
        option1.nextElementSibling.textContent = 'Celsius to Fahrenheit';
        option2.nextElementSibling.textContent = 'Fahrenheit to Celsius';
    } else if (propertyDropdown.value === 'mass') {
        option1.nextElementSibling.textContent = 'Kilograms to Pounds';
        option2.nextElementSibling.textContent = 'Pounds to Kilograms';
    } else if (propertyDropdown.value === 'length') {
        option1.nextElementSibling.textContent = 'Meters to Feet';
        option2.nextElementSibling.textContent = 'Feet to Meters';
    } else if (propertyDropdown.value === 'speed') {
        option1.nextElementSibling.textContent = 'Kilometers/hour to Miles/hour';
        option2.nextElementSibling.textContent = 'Miles/hour to Kilometers/hour';
    } else if (propertyDropdown.value === 'volume') {
        option1.nextElementSibling.textContent = 'Liters to Gallons';
        option2.nextElementSibling.textContent = 'Gallons to Liters';
    }
    convert();
});

option1.addEventListener('change', convert);
option2.addEventListener('change', convert);
