document.addEventListener("DOMContentLoaded", function () {
  loadProducts();
  loadOffers();
  loadBrands();

  document
    .getElementById("addProductForm")
    .addEventListener("submit", addProduct);
  document.getElementById("addOfferForm").addEventListener("submit", addOffer);
  document.getElementById("addBrandForm").addEventListener("submit", addBrand);
});

function loadProducts() {
  const products = JSON.parse(localStorage.getItem("products") || "[]");
  const table = document.querySelector("#productList table");

  while (table.rows.length > 1) table.deleteRow(1);

  products.forEach((product, index) => {
    const row = table.insertRow();
    row.innerHTML = `
      <td>${product.name}</td>
      <td>${product.category}</td>
      <td>${product.brand}</td>
      <td>${product.tonnage}</td>
      <td>₹${product.price}</td>
      <td><button data-index="${index}" class="delete-product">Delete</button></td>
    `;
  });

  document.querySelectorAll(".delete-product").forEach((btn) => {
    btn.addEventListener("click", function () {
      const idx = parseInt(this.dataset.index);
      products.splice(idx, 1);
      localStorage.setItem("products", JSON.stringify(products));
      loadProducts();
    });
  });
}

function loadOffers() {
  const offers = JSON.parse(localStorage.getItem("offers") || "[]");
  const table = document.querySelector("#offerList table");

  while (table.rows.length > 1) table.deleteRow(1);

  offers.forEach((offer, index) => {
    const row = table.insertRow();
    row.innerHTML = `
      <td>${offer.title}</td>
      <td>${offer.description}</td>
      <td>${offer.valid_till}</td>
      <td><button data-index="${index}" class="delete-offer">Delete</button></td>
    `;
  });

  document.querySelectorAll(".delete-offer").forEach((btn) => {
    btn.addEventListener("click", function () {
      const idx = parseInt(this.dataset.index);
      offers.splice(idx, 1);
      localStorage.setItem("offers", JSON.stringify(offers));
      loadOffers();
    });
  });
}

function loadBrands() {
  const brands = JSON.parse(localStorage.getItem("brands") || "[]");
  const table = document.querySelector("#brandList table");

  while (table.rows.length > 1) table.deleteRow(1);

  brands.forEach((brand, index) => {
    const row = table.insertRow();
    row.innerHTML = `
      <td>${brand.name}</td>
      <td><img src="${brand.image}" width="60"></td>
      <td><button data-index="${index}" class="delete-brand">Delete</button></td>
    `;
  });

  document.querySelectorAll(".delete-brand").forEach((btn) => {
    btn.addEventListener("click", function () {
      const idx = parseInt(this.dataset.index);
      brands.splice(idx, 1);
      localStorage.setItem("brands", JSON.stringify(brands));
      loadBrands();
    });
  });
}

function addProduct(e) {
  e.preventDefault();
  const products = JSON.parse(localStorage.getItem("products") || "[]");

  const product = {
    name: e.target.product_name.value,
    category: e.target.category.value,
    brand: e.target.brand.value,
    tonnage: e.target.tonnage.value,
    price: e.target.price.value,
    description: e.target.description.value,
    image: e.target.image.value,
  };

  products.push(product);
  localStorage.setItem("products", JSON.stringify(products));
  alert(`Product "${product.name}" added successfully!`);
  e.target.reset();
  loadProducts();
}

function addOffer(e) {
  e.preventDefault();
  const offers = JSON.parse(localStorage.getItem("offers") || "[]");

  const offer = {
    title: e.target.offer_title.value,
    description: e.target.offer_description.value,
    valid_till: e.target.valid_till.value,
  };

  offers.push(offer);
  localStorage.setItem("offers", JSON.stringify(offers));
  alert(`Offer "${offer.title}" added successfully!`);
  e.target.reset();
  loadOffers();
}

function addBrand(e) {
  e.preventDefault();
  const brands = JSON.parse(localStorage.getItem("brands") || "[]");

  const brand = {
    name: e.target.brand_name.value,
    image: e.target.brand_image.value,
  };

  brands.push(brand);
  localStorage.setItem("brands", JSON.stringify(brands));
  alert(`Brand "${brand.name}" added successfully!`);
  e.target.reset();
  loadBrands();
}
