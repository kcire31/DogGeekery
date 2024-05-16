import {connectionAPI} from "./connectionAPI.js";

async function listProduct(){

    await connectionAPI.listProducts();
    const selectButtons = document.querySelectorAll("#trash");

    selectButtons.forEach(button => {
        button.addEventListener("click", async () =>{
        const productId = button.dataset.id;

        const isDeleted = await deletepe(productId);

        if (isDeleted) {
            button.closest(".delete").remove();
        }
        
        })
    })

    if (selectButtons.length == 0) {
        const error = document.querySelector(".cards");
        error.innerHTML = `<h2 class="noItems">No items added yet</h2>`
    }

}

listProduct();

async function deletepe(productId){
    try {
        const del = await connectionAPI.deleteProduct(productId);
        return true;

    } catch (error) {
        console.error("Error al eliminar el producto:", error);
        return false;
    }
    
}