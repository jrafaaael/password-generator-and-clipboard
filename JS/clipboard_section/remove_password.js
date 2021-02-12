// Imports
import { getLocalStorage, setLocalStorage } from "../local_storage/local_storage_functions.js";

// Variables
const audio = document.querySelector('audio');

// Functions
const removeFromLocalStorage = (element) => {
    const passwordToRemove = element.previousElementSibling.textContent;
    let passwords = getLocalStorage('passwords');

    passwords = passwords.filter(
        password => password !== passwordToRemove);

    setLocalStorage('passwords', passwords);
    if (passwords.length > 0) return true;
}

const playRemoveSound = () => {
    audio.play();
}

// Exports
export const removePassword = (element) => {
    element.parentNode.classList.add('removed');
    playRemoveSound();
    element.parentNode.addEventListener('animationend', () => {
        element.parentNode.remove();
    }, false);

    return removeFromLocalStorage(element);
}