// Imports
import { getLength } from "./length.js";
import { generateChar } from "./random_char.js";
import { getRandomNumber } from "./random_number.js";
import { passwordResult } from "../generator.js";

// Class
class Password {
    constructor(length, preferences) {
        this.length = length;
        this.preferences = preferences;
    }

    generateRandomPassword() {
        let password = ''

        while (password.length < this.length)
            password += generateChar(
                this.preferences[
                    getRandomNumber(
                        0, this.preferences.length - 1)]);

        this.setPassword = password;
    }

    set setPassword(password) {
        this._password = password;
    }
}

// Functions
const getConfiguration = () => {
    const length = getLength();
    const lowercase = document.getElementById('lowercase').checked;
    const number = document.getElementById('numbers').checked;
    const symbol = document.getElementById('symbols').checked;
    const uppercase = document.getElementById('uppercase').checked;

    const preferences = setPreferences({
        'lowercase': lowercase,
        'number': number,
        'symbol': symbol,
        'uppercase': uppercase,
    });

    createNewPassword(length, preferences);
}

const setPreferences = (configuration) => {
    return Object.entries(configuration)
        .filter(option => option[1])
        .map(option => option.shift());
}

const createNewPassword = (length, preferences) => {
    const password = new Password(length, preferences);
    password.generateRandomPassword();

    printPassword(password);
}

const printPassword = (passwordInstance) => {
    passwordResult.textContent = passwordInstance._password;
}

// Export
export { getConfiguration };