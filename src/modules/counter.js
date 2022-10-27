export const counter = (items) => {
    const sum = items.length;
    return sum;
}

export const test = () => {
    document.addEventListener("DOMContentLoaded", () => { 
        const collection = document.querySelector(".meals");
        return [...collection.children].length;
    })
}