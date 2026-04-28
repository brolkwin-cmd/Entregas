const API = "https://fakeapi.net/products";

async function getProducts () {
    try {
        const response = await fetch(API);
        const data = await response.json();
        
        let totalProducto = 0;
        
        data.data.forEach(product => {
            totalProducto += product.price; 
        });
        
        console.log("Total:", totalProducto);
        console.log(data);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

getProducts();