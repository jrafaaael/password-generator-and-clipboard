// Imports
import { copyToClipboard } from "./clipboard_section/copy.js";
import { removePassword } from "./clipboard_section/remove_password.js";
import { render } from "./clipboard_section/render.js";
import { showMesage } from "./clipboard_section/show_message.js";

// Variables
const clipboard = document.getElementById('clipboard');
const clipboardInner = clipboard.querySelector('.container');
const closeClipboard = clipboard.querySelector('#close');
const copyBtn = document.getElementById('copy');
const removeAllBtn = document.getElementById('remove-all');
const passwordList = document.getElementById('clipboard-list');

// Code
clipboard.addEventListener('click', () => {
    clipboard.classList.add('show');
}, false);

closeClipboard.addEventListener('click', () => {
    clipboard.classList.remove('show');
}, false);

clipboardInner.addEventListener('click', e => {
    e.stopPropagation();

    const element = e.target.closest('.remove-password') ||
    ((e.target.tagName === 'LI') ?
        (e.target.querySelector('textarea')) :
            ((e.target.tagName === 'TEXTAREA') ?
                (e.target) :
                    null));

    if(element === null) return;

    switch(element.tagName) {
        case 'TEXTAREA': {
            copyToClipboard(element);
            showMesage(element.parentNode);
            break;
        }
        case 'BUTTON': {
            if (!removePassword(element)) removeAllBtn.disabled = true;
            break;
        }
    }
}, false);

copyBtn.addEventListener('click', () => {
    copyToClipboard();
    showMesage(copyBtn);
    removeAllBtn.disabled = false;
}, false);

removeAllBtn.addEventListener('click', () => {
    localStorage.clear();
    while (passwordList.firstElementChild)
        passwordList.firstElementChild.remove();
    showMesage(removeAllBtn);
    removeAllBtn.disabled = true;
}, false);

window.addEventListener('DOMContentLoaded', () => {
    if (!render()) removeAllBtn.disabled = true;
}, false);

// Export
export { copyBtn, passwordList };