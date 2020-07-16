import { getCart, findById } from '../common/utils.js';

export function renderFlower(flower) {
    const liEl = document.createElement('li');

    const category = flower.category;
    liEl.classList.add(category);
    const flowerTitle = flower.description;
    liEl.title = flowerTitle;

    const h3El = document.createElement('h3');
    h3El.textContent = flower.name;
    liEl.append(h3El);

    const imgEl = document.createElement('img');
    imgEl.src = '../assets/' + flower.image;
    imgEl.alt = flower.name + ' image';
    liEl.append(imgEl);

    const pEl = document.createElement('p');
    pEl.classList.add('price');
    pEl.textContent = `$${flower.price.toFixed(2)}`;

    const labelEl = document.createElement('label');
    labelEl.for = 'quantity';
    labelEl.textContent = 'Quantity';

    const inputEl = document.createElement('input');
    inputEl.type = 'number';
    inputEl.id = 'quantity';
    inputEl.name = 'quantity';
    inputEl.min = 1;
    inputEl.max = 5;
    inputEl.append(labelEl); 


    const buttonEl = document.createElement('button');
    buttonEl.value = flower.id;
    buttonEl.textContent = 'Add';
    buttonEl.addEventListener('click', () => {
        const cart = getCart();

        const flowerInCart = findById(cart, flower.id);

        if (flowerInCart) {
            flowerInCart.quantity++;
        } else {
            const newFlower = {
                id: flower.id,
                quantity: 1 
            };

            cart.push(newFlower);
        } 

        const stringyFlowerCart = JSON.stringify(cart);

        localStorage.setItem('CART', stringyFlowerCart);


    });

    pEl.append(labelEl);
    pEl.append(inputEl);
    pEl.append(buttonEl);

    liEl.append(pEl);

    return liEl;

}

export default renderFlower;