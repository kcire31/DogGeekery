import { connectionAPI } from "./connectionAPI.js";

const form = document.querySelector("[data-form]");

async function createProduct(event) {

    event.preventDefault();
    const productName = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;
    const image = document.querySelector("[data-image]").value;

    form.reset();

    try{
        await connectionAPI.addProduct(productName,price,image);
    } catch (e){
        alert(e);
    }
}

form.addEventListener("submit", event =>createProduct(event));