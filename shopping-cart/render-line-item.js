

export function renderLineItem(lineItem, flower) {
    const tr = document.createElement('tr');

    const flowerNameCell = document.createElement('td');
    flowerNameCell.classList.add('align-left');
    flowerNameCell.textContent = flower.name;
    tr.append(flowerNameCell);

    const quantityCell = document.createElement('td');
    quantityCell.textContent = lineItem.quantity;
    tr.append(quantityCell);

    const priceCell = document.createElement('td');
    priceCell.textContent = `$${flower.price.toFixed(2)}`;
    tr.append(priceCell);

    const totalCell = document.createElement('td');
    totalCell.classList.add('line-item-total');
    totalCell.textContent = '$' + Number(lineItem.quantity * flower.price).toFixed(2);
    tr.append(totalCell); 


    return tr;

}
