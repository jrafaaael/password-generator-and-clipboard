import { lengthInput, passwordResult } from "../generator.js";

// Variables
const showLength = document.querySelector('#pass-length span');

// Functions
const getLength = () => {
    return +lengthInput.value;
}

const printLength = (e) => {
    const length = getLength();
    passwordResult.textContent = 'Click in "Generate Password"';
    showLength.textContent = length;
}

// Export
export { getLength, printLength };