export function findById(someArray, someId) {
    for (let i = 0; i < someArray.length; i++){
        const arrayItem = someArray[i];
        if (someId === arrayItem.id) {
            return arrayItem;} 
    } return null;
}

export function calcLineItem(quantity, amount) {
    const total = quantity * amount;
    return roundAmount(total);
}

export function roundAmount(amount) {
    const total = Math.round(amount * 100) / 100;
    return total;
}

export function calcOrderTotal(cart, flowers) {
    let orderTotal = 0;
    for (let i = 0; i < cart.length; i++) {
        const flowerItem = cart[i];
        const flower = findById(flowers, flowerItem.id);
        const lineTotal = calcLineItem(flowerItem.quantity, flower.price);
        orderTotal += lineTotal;
    }
    return roundAmount(orderTotal);
}



