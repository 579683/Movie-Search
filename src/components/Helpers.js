// Convert time to hours and minutes
export const calcTime = (x) => {
    const hours = Math.floor(x / 60);
    const mins = x % 60;
    return `${hours}h ${mins}m`
}

// Convert a number to $ format
export const convertMoney = (y) => {
    var format = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
    });
    return format.format(y);
}