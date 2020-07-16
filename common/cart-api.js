export function getCart() {
    const rawCart = localStorage.getItem('CART');
    const cart = JSON.parse(rawCart) || [];

    return cart;
}