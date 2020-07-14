import renderFlower from './render-flower.js';
import flowers from '../data/flowers.js';

const list = document.getElementById('flowers');

for (let i = 0; i < flowers.length; i++) {
    const flower = flowers[i];
    const el = renderFlower(flower);
    list.append(el);
}

