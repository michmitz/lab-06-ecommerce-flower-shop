import flowers from '../data/flowers.js';
import { findById, calcOrderTotal } from '../common/utils.js';
import { getCart, clearCart, orderDetails } from '../common/cart-api.js';
import { renderLineItem } from './render-line-item.js';

const cart = getCart();

const tbody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');
const placeOrderButton = document.getElementById('order-button');

for (let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];
    const flower = findById(flowers, lineItem.id);
    const dom = renderLineItem(lineItem, flower);

    tbody.append(dom);
}

const orderTotal = calcOrderTotal(cart, flowers);
orderTotalCell.textContent = `$${orderTotal.toFixed(2)}`;

if (cart.length === 0) {
    placeOrderButton.disabled = true;
}
else {

    placeOrderButton.addEventListener('click', () => {
     
        alert(`Your order has been placed! ${orderDetails()}`);
        clearCart();
        
        window.location = '../index.html';
    });
}

