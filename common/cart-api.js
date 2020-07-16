export function getCart() {
    const rawCart = localStorage.getItem('CART');
    const cart = JSON.parse(rawCart) || [];

    return cart;
}

export function clearCart() {
    localStorage.removeItem('CART');
}