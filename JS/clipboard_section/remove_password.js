// Imports
import { getLocalStorage, setLocalStorage } from "../local_storage/local_storage_functions.js";

// Functions
const removeFromLocalStorage = (element) => {
    const passwordToRemove = element.previousElementSibling.textContent;
    let passwords = getLocalStorage('passwords');

    passwords = passwords.filter(
        password => password !== passwordToRemove);

    setLocalStorage('passwords', passwords);
    if (passwords.length > 0) return true;
}

// Exports
export const removePassword = (element) => {
    element.parentNode.classList.add('removed');
    element.parentNode.addEventListener('animationend', () => {
        element.parentNode.remove();
    }, false);

    return removeFromLocalStorage(element);
}