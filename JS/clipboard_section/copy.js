// Import
import { passwordResult } from "../generator.js";
import { saveNewPassword } from "./save_password.js";

// Functions
export const copyToClipboard = (textareaElement = passwordResult) => {
    textareaElement.focus();
    textareaElement.select();
    document.execCommand('copy');
    saveNewPassword();
}