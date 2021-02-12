// Exports
export function getRandomNumber(min, max) {
    //https://stackoverflow.com/questions/18230217/javascript-generate-a-random-number-within-a-range-using-crypto-getrandomvalues
    // Create byte array and fill with 1 random number
    let byteArray = new Uint8Array(1);
    window.crypto.getRandomValues(byteArray);

    let range = max - min + 1;
    let max_range = 256;
    if (byteArray[0] >= Math.floor(max_range / range) * range)
        return getRandomNumber(min, max);
    return min + (byteArray[0] % range);
}