// Fetch products from Fake Store API
fetch("https://fakestoreapi.com/products?limit=12") 
  .then(response => response.json())
  .then(products => {
    const cardsContainer = document.querySelector(".category-cards");
    cardsContainer.innerHTML = "";

    products.forEach(product => {
      const card = document.createElement("li");
      card.classList.add("card");

      card.innerHTML = `
        <a href="#">
          <div class="card-img">
            <img src="${product.image}" alt="${product.title}">
          </div>
          <div class="card-text">
            <div class="heading">
              <h3>${product.title.substring(0, 25)}...</h3>
              <p>${product.description.substring(0, 50)}...</p>
              <p class="price-p">$${product.price.toFixed(2)}</p>
            </div>
            <button>Add to cart</button>
          </div>
        </a>
      `;

      cardsContainer.appendChild(card);
    });
  })
  .catch(error => console.error("Error fetching products:", error));
