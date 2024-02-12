fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const productListElement = document.getElementById("productlist");
    data.forEach(product => {
      const productItem = document.createElement("div");
      productItem.classList.add('col-md-4', 'mb-4'); // Adding Bootstrap grid classes

      let clickCount = 0; // Initialize click counter for each product

      productItem.innerHTML = `
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${product.product_name}</h5>
            <p class="card-text">${product.product_description}</p>
            <p class="card-text">Price: $${product.product_price}</p>
            <p class="card-text">Date Added: ${product.product_dateAdded}</p>
            <p class="card-text">Expiration Date: ${product.product_ExpirationDate}</p>
            <button class="btn btn-primary" id="addToCartBtn${product.product_name}" onclick="addToCart('${product.product_name}')">Add to Cart</button>
            <span id="clickCount${product.product_name}">0</span> Clicks
          </div>
        </div>
      `;

      productListElement.appendChild(productItem);

      // Function to handle click event for the "Add to Cart" button
      window[`addToCart${product.product_name}`] = function() {
        clickCount++;
        document.getElementById(`clickCount${product.product_name}`).innerText = clickCount;
      }
    });
  })
  .catch(error => console.error('Error fetching data:', error));
