document.getElementById("fetchProducts").addEventListener("click", ()=>{
    fetch("/api/v1/products")
    .then(response=>response.json())
    .then(data=>{
        const productList = document.getElementById("productList");
        productList.innerHTML = "";
        data.forEach(element => {
            const productItem = document.createElement("div");
            productItem.textContent = `${element.id}. ${element.name} $${element.price}`;
            productList.appendChild(productItem);
        });
    })
})