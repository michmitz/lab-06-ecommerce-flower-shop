import { renderFlower } from '../products/render-flower.js';

const test = QUnit.test;

test('renders a flower', assert => {
    //Arrange
    const rose = {
        id: 'rose',
        name: 'Red Rose',
        image: 'rose.jpg',
        description: 'A beautiful, romantic flower that makes a great gift',
        category: 'romantic',
        price: 9.00
    };
    // Set up your arguments and expectations
    const expected = '<li class="romantic" title="A beautiful, romantic flower that makes a great gift"><h3>Red Rose</h3><img src="../assets/rose.jpg" alt="Red Rose image"><p class="price">$9.00<button value="rose">Add</button></p></li>';
    //Act 
    // Call the function you're testing and set the result to a const

    //Expect
    const dom = renderFlower(rose);
    const html = dom.outerHTML;
    // Make assertions about what is expected versus the actual result
    assert.equal(html, expected);
});