export function renderFlower(flower) {


}






























/*// write a function that takes in an array and an id and returns the matching item
export function renderFruit(fruit) {
    const liEl = document.createElement('li');
    
    const category = fruit.category;
    liEl.classList.add(category);
    const title = fruit.description;
    liEl.title = title;

    const h3El = document.createElement('h3');
    h3El.textContent = fruit.name;
    liEl.append(h3El);

    const imgEl = document.createElement('img');
    imgEl.src = fruit.image;
    imgEl.alt = fruit.name + ' image'
    liEl.append(imgEl);

    const pEl = document.createElement('p');
    pEl.classList.add('price');
    pEl.textContent = `$${fruit.price.toFixed(2)}`;

    const buttonEl = document.createElement('button');
    buttonEl.value = 'apple';
    buttonEl.textContent = 'Add';
    pEl.append(buttonEl);
    
    liEl.append(pEl);
    
    return liEl;
}*/