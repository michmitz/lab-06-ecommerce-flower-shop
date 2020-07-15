import flowers from '../data/flowers.js';
import cart from '../data/cart.js';
import { findById, calcOrderTotal } from '../common/utils.js';
import { renderLineItem } from './render-line-item.js';

const tbody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');

for (let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];
    const flower = findById(flowers, lineItem.id);
    const dom = renderLineItem(lineItem, flower);

    tbody.append(dom);
}

const orderTotal = calcOrderTotal(cart, flowers);
orderTotalCell.textContent = `$${orderTotal.toFixed(2)}`;