// Imports
import { passwordList } from "../clipboard.js";

// Variables
const template = document.querySelector('template').content;

// Functions
const printPasswordInClipboardSection = (password) => {
    const newPassword = template.cloneNode(true);
    const textarea = newPassword.querySelector('textarea');

    textarea.textContent = password;

    passwordList.appendChild(newPassword);
}

// Exports
export { printPasswordInClipboardSection as printPassword };