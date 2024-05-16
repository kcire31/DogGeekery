async function listProducts() {
    const connection = await fetch("http://localhost:3001/products");
    const parseConnection = connection.json();
    // console.log(parseConnection);
    return parseConnection;
}

async function addProduct(productName,price,image,id) {
    const connection = await fetch("http://localhost:3001/products",{
        method: "POST",
        headers: {"Content-type":"application/json"},
        body: JSON.stringify({
            productName:productName,
            price:price,
            image:image,
            id:id,
        })
    });

    const parseConnection = connection.json();

    if (!connection.ok) {
        throw new Error("A problem occurred while adding a product");
    }

    return parseConnection;

}

async function deleteProduct(id) {
    const connection = await fetch(`http://localhost:3001/products/${id}`, {
        method: "DELETE",
        headers: {"Content-type":"application/json"}
    })

    const parseConnection = await connection.json();
    return parseConnection;
    // return parseConnection;
}

export const connectionAPI = {
    listProducts, addProduct, deleteProduct
};




//dar formato al precio
//checkar validacion de formulario
//agregar boton para subir imagenes
