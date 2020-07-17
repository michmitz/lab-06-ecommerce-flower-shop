import { renderFlower } from '../products/render-flower.js';

const test = QUnit.test;

QUnit.module('Render Flower');

test('renders a flower', assert => {
    const rose = {
        id: 'rose',
        name: 'Red Rose',
        image: 'rose.jpg',
        description: 'A beautiful, romantic flower that makes a great gift',
        category: 'romantic',
        price: 9.00
    };

    const expected = '<li class="romantic" title="A beautiful, romantic flower that makes a great gift"><h3>Red Rose</h3><img src="../assets/rose.jpg" alt="Red Rose image"><p class="price">$9.00<label>Quantity</label><input type="number" id="quantity" name="quantity" min="1" max="5"><button value="rose">Add</button></p></li>';

    const dom = renderFlower(rose);
    const html = dom.outerHTML;

    assert.equal(html, expected);
});