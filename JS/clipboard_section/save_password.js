// Imports
import { getLocalStorage, setLocalStorage } from "../local_storage/local_storage_functions.js";
import { printPassword } from "./print_password_in_clipboard.js";
import { passwordResult } from "../generator.js";

// Functions
const passwordExist = (password) => {
    return getLocalStorage('passwords').includes(password);
}

// Exports
export const saveNewPassword = () => {
    if ((!passwordExist(passwordResult.textContent)) &&
        (passwordResult.textContent !== 'Click in "Generate Password"')) {
        const passwords = getLocalStorage('passwords');
        passwords.push(passwordResult.textContent);
        setLocalStorage('passwords', passwords);
        printPassword(passwordResult.textContent)
    }
}