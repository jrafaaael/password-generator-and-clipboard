// Exports
export const showMesage = (element) => {
    element.classList.add('show');
    setTimeout(() => element.classList.remove('show'), 1500);
}