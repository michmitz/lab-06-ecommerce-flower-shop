import { findById } from './utils.js';
import flowers from '../data/flowers.js';


export function getCart() {
    const rawCart = localStorage.getItem('CART');
    const cart = JSON.parse(rawCart) || [];

    return cart;
}

export function clearCart() {
    localStorage.removeItem('CART');
}

export function orderDetails() {
    const cart = getCart();
    let confirmedDetails = [];
    for (let i = 0; i < cart.length; i++) {
        const cartItem = cart[i];
        const flower = findById(flowers, cartItem.id);
        const eachOrder = (`${cartItem.quantity} ${flower.name}`);
        confirmedDetails.push(eachOrder);
    }
    return confirmedDetails;
}

/*export function addToCart() {
    const cart = getCart();
    const stringyFlowerCart = JSON.stringify(cart);

    localStorage.setItem('CART', stringyFlowerCart);
}*/