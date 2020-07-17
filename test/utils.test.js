// IMPORT MODULES under test here:
import { findById, calcLineItem, calcOrderTotal } from '../common/utils.js';
import { getCart } from '../common/cart-api.js';
import flowers from '../data/flowers.js';
import cart from '../data/cart.js';

const test = QUnit.test;

// set up some hard coded data


test('it should take in an id and an array and return the matching item', function(assert) {
    const rose = {
        id: 'rose',
        name: 'Red Rose',
        image: 'rose.jpg',
        description: 'A beautiful, romantic flower that makes a great gift',
        category: 'romantic',
        price: 9.00
    };
    
    const lily = {
        id: 'lily',
        name: 'White Lily',
        image: 'lily.jpg',
        description: 'An elegant flower suited for weddings, anniversaries or funerals',
        category: 'events',
        price: 12.00
    };
    
    const hydrangea = {
        id: 'hydrangea',
        name: 'Hydrangea',
        image: 'hydrangea.jpg',
        description: 'A fun spring flower!',
        category: 'any-event',
        price: 3.00
    };

    const myArray = [
        rose,
        lily,
        hydrangea
    ];

    //Arrange
    // Set up your parameters and expectations

    const myId1 = 'hydrangea';
    const myId2 = 'lily';
    const expected1 = hydrangea;
    const expected2 = lily;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual1 = findById(myArray, myId1);
    const actual2 = findById(myArray, myId2);
    
    //Assert
    // Make assertions about what is expected versus the actual result
    assert.equal(actual1, expected1);
    assert.equal(actual2, expected2);
});


test('calculate line total', (assert) => {
    // arrange
    const quantity = 6;
    const price = 7.05;
    const expected = 42.3;

    // act 
    const total = calcLineItem(quantity, price);

    // assert
    assert.equal(total, expected);
});

test('calculate order total', (assert) => {
    const expected = 427;

    const orderTotal = calcOrderTotal(cart, flowers);

    assert.equal(orderTotal, expected);
    
});

test('should return the current state of the cart', assert => {
    const myFakeCart = [
        { id: 'lily',
            quantity: 5 },
        { id: 'hydrangea',
            quantity: 2 },
    ];

    const myStringyFakeCart = JSON.stringify(myFakeCart);
    localStorage.setItem('CART', myStringyFakeCart);
    const cart = getCart();
    const expected = myFakeCart;

    assert.deepEqual(cart, expected);
});

test('should return an empty array if cart is null in local storage', assert => {
    localStorage.removeItem('CART');
    const cart = getCart();
    const expected = [];

    assert.deepEqual(cart, expected);

});