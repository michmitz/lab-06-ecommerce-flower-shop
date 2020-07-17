export function getCart() {
    const rawCart = localStorage.getItem('CART');
    const cart = JSON.parse(rawCart) || [];

    return cart;
}

export function clearCart() {
    localStorage.removeItem('CART');
}

/*export function addToCart() {
    const cart = getCart();
    const stringyFlowerCart = JSON.stringify(cart);

    localStorage.setItem('CART', stringyFlowerCart);
}*/