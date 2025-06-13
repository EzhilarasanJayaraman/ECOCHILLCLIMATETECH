document.addEventListener("DOMContentLoaded", function () {
  fetch("data/brands.json")
    .then((response) => response.json())
    .then((brands) => {
      const container = document.getElementById("brandsContainer");

      if (brands.length === 0) {
        container.innerHTML = "<p>No brands uploaded yet.</p>";
        return;
      }

      container.innerHTML = "";
      brands.forEach((brand) => {
        const brandCard = document.createElement("div");
        brandCard.className = "brand-card";
        brandCard.title = brand.name;
        brandCard.innerHTML = `
          <img src="${brand.image}" alt="${brand.name} Logo" class="brand-logo" />
          <div class="brand-name">${brand.name}</div>
        `;
        container.appendChild(brandCard);
      });
    })
    .catch((error) => {
      console.error("Error loading brands:", error);
      document.getElementById("brandsContainer").innerHTML =
        '<p class="error">Failed to load brands. Please try again later.</p>';
    });
});
