const urlParams = new URLSearchParams(window.location.search);
// const query = urlParams.get("q");
const id = urlParams.get("id");
const url = "https://kea-alt-del.dk/t7/api/products/" + id;
fetch (url)
 .then((res) => res.json())
 .then((data) => showProduct(data));

function showProduct(product){
console.log (product); 
document.querySelector(".brand").textContent = product.brandname;
document.querySelector( ".productname").textContent=product.productdisplayname;
document.querySelector( ".purchaseBox h3").textContent=product.productdisplayname;
document.querySelector( ".color").textContent=product.basecolour;
document.querySelector( ".inventory").textContent=product.id;
document.querySelector( ".info h1").textContent=product.brandname;
document.querySelector( ".title").textContent=product.productdisplayname;
document.querySelector( ".info p").textContent=product.brandbio;
document.querySelector (".productimage").src= `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`
document.querySelector (".productimage").alt= product.productdisplayname;

}