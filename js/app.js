const apiUrl = 'launch.json';
async function fetchAndDisplayProducts(){
    try{
         const response = await fetch(apiUrl);
         const data = await response.json();

         const productList = document.getElementById('product-list');
 
         data.forEach(product => {

           const productCard = document.createElement('div');
           productCard.classList.add('product-card');

           const productName = document.createElement('h3');
           productName.textContent = product.name;

           const productPrice = document.createElement('p'); 
           productPrice.textContent = 'Price: $${product.price}';

productCard.appendChild(productName);

productCard.appendChild(productPrice);

productList.appendChild(productCard);

}); } catch (error) {

console.error('Error fetching data:', error);
}
}
fetchAndDisplayProducts();