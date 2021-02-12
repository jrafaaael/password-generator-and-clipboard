// Import
import { getRandomNumber } from "./random_number.js";

// Variables
const SYMBOLS = ['!', `"`, '#', '$', '%', '&', `'`, '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];

// Exports
export const generateChar = (type) => {
    switch (type) {
        case 'number': {
            return String.fromCharCode(getRandomNumber(48, 57));
        }
        case 'uppercase': {
            return String.fromCharCode(getRandomNumber(65, 90));
        }
        case 'lowercase': {
            return String.fromCharCode(getRandomNumber(97, 122));
        }
        case 'symbol': {
            return SYMBOLS[getRandomNumber(0, SYMBOLS.length-1)];
        }
    }
}