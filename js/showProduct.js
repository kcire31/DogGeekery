import { connectionAPI } from "./connectionAPI.js";

const list = document.querySelector("[data-list]");

function createCard(productName, price, image, id) {
    const item = document.createElement("div");
    item.className = "cards_container";
    item.innerHTML = `<div class="product-item">
        <img id="Items" src="${image}" alt="${productName}">
        </div>
        <div class="price_trash" >
            <h2>${productName}</h2>
        </div>
        <div class="price_trash2">
            <h2 class="price">$${price}</h2>
            <img id="trash" src="Items/trash.png" class="delete" data-id="${id}">
        </div>`;

    return item;
};


async function listProduct(){

    try{
        const listAPI = await connectionAPI.listProducts();
        listAPI.forEach(product => list.appendChild(createCard(product.productName, product.price, product.image, product.id))); 

    } catch {
        const main = document.querySelector("main");
        main.classList.add("error");
        main.innerHTML = `<h2 class="error_message">A problem has occurred with the connection :(</h2>`
    }
}
createCard();
listProduct();

