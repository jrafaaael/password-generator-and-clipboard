// Imports
import { getLocalStorage } from "../local_storage/local_storage_functions.js";
import { printPassword } from "./print_password_in_clipboard.js";

// Export
export const render = () => {
    const passwords = getLocalStorage('passwords');
    passwords.forEach(password => {
        printPassword(password);
    });

    if(passwords.length > 0) return true;
}