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
      brands.forEach((brand, index) => {
        const brandCard = document.createElement("div");
        brandCard.className = "brand-card";
        brandCard.title = brand.name || `Brand ${index + 1}`;
        brandCard.innerHTML = `
          <img src="${brand.image}" alt="${
          brand.name || `Brand ${index + 1}`
        } Logo" class="brand-logo" />
        ${brand.name ? `<div class="brand-name">${brand.name}</div>` : ""}

        `;

        // Add click event for first brand (Daikin)
        if (index === 0) {
          brandCard.style.cursor = "pointer";
          brandCard.addEventListener("click", function () {
            window.location.href = "products.html";
          });
        }

        container.appendChild(brandCard);
      });
    })
    .catch((error) => {
      console.error("Error loading brands:", error);
      document.getElementById("brandsContainer").innerHTML =
        '<p class="error">Failed to load brands. Please try again later.</p>';
    });
});
