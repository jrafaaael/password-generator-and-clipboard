// Imports
import { printLength } from "./pass_generator/length.js";
import { getConfiguration } from "./pass_generator/password.js";
import { copyBtn } from "./clipboard.js";

// Variables
const lengthInput = document.getElementById('length');
const passwordResult = document.getElementById('pass-result');
const generateBtn = document.getElementById('generate');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// Code
lengthInput.addEventListener('input', () => {
    printLength(lengthInput);
    copyBtn.disabled = true;
}, false);

generateBtn.addEventListener('click', e => {
    e.preventDefault();
    getConfiguration();
    copyBtn.disabled = false;
}, false);

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const selected = document.querySelectorAll('input[type="checkbox"]:checked');
        if(selected.length < 2) selected[0].disabled = true;
        else selected.forEach(checked => {checked.disabled = false;})
    }, false);
})

printLength(lengthInput);

// Export
export { lengthInput, passwordResult }