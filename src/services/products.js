const BASE_URL = "https://693df940f55f1be7930411e4.mockapi.io/products";

export const createProduct = async (product) => {
    const res = await fetch(BASE_URL, {
        method: "POST",
        headers: {"Content-type" : "application/json"},
        body: JSON.stringify(product)
    });

    if(!res.ok){
        throw new Error("No se pudo crear el producto");
    }

    const result = await res.json();
    return result;
};

export const getProducts = async (category) => {
    let url = BASE_URL;

    if(category){
        url = `${BASE_URL}?catgory=${category}`;
    }

    const res = await fetch(url);
    if(!res.ok){
        throw new Error("Error al listar productos");
    }

    const results = await res.json();
    return results;
}