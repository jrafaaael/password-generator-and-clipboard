// Functions
const getLocalStorage = (prop) => {
    return localStorage.hasOwnProperty(prop) ? JSON.parse(localStorage.getItem(prop)) : [];
}

const setLocalStorage = (prop, value) => {
    localStorage.setItem(prop, JSON.stringify(value));
}

// Exports
export { getLocalStorage, setLocalStorage };