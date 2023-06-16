function fetchProducts() {
  let url = "https://dummyjson.com/products";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let products = data.products;
      render(products);
    })
    .catch((error) => console.log(error));
}

fetchProducts();

function render(products) {
  let container = document.querySelector(".product-container");
  container.innerHTML = ""; 
  products.forEach((product) => {
    let div = document.createElement("div");
    div.classList.add("product-item");
    div.innerHTML = `
		<img src="${product.thumbnail}" alt="Product Image">
		<h3>${product.title}</h3>
		<p>Price: $${product.price}</p>
		<div class="rating">${rating(product.rating)}</div>
	  `;

    container.append(div); 
  });
}


function rating(n) {
 let roundedRating = Math.round(n); 
  let stars = "";
  for (let i = 0; i < 5; i++) {
    if (i < roundedRating) {
      stars += '<span class="fa fa-star active"></span>';
    } else {
      stars += '<span class="fa fa-star"></span>';
    }
  }
  return stars;
}
