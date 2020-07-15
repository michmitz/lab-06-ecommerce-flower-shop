import flowers from '../data/flowers.js';
import { findById } from '../common/utils.js';
import { renderLineItem } from '../shopping-cart/render-line-item.js';

const test = QUnit.test;

QUnit.module('Render Line Item');

test('renders a line item', assert => {
    const lineItem = {
        id: 'lily',
        quantity: 4
    };

    const lily = findById(flowers, lineItem.id);
    const expected = '<tr><td class="align-left">White Lily</td><td>4</td><td>$12.00</td><td class="line-item-total">$48.00</td></tr>';

    const dom = renderLineItem(lineItem, lily);
    const html = dom.outerHTML;

    assert.equal(html, expected);

});