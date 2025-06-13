// Fetch products data
fetch("data/products.json")
  .then((response) => response.json())
  .then((data) => {
    const cDiv = document.getElementById("cate"),
      pDiv = document.getElementById("products"),
      btn = document.getElementById("back");

    // Group products by category with image
    const productsByCategory = {};
    const categoryImages = {};

    data.forEach((product) => {
      if (!productsByCategory[product.category]) {
        productsByCategory[product.category] = [];
        if (product.categoryImage) {
          categoryImages[product.category] = product.categoryImage;
        }
      }
      productsByCategory[product.category].push(product);
    });

    // Display categories with image
    Object.keys(productsByCategory).forEach((cat) => {
      const d = document.createElement("div");
      d.className = "card";
      d.innerHTML = `
        <img src="${
          categoryImages[cat] || "images/default.jpg"
        }" alt="${cat}" style="height:150px; object-fit:cover; border-radius: 8px;" />
        <h3>${cat}</h3>
      `;
      d.onclick = () => showCategory(cat, productsByCategory[cat]);
      cDiv.appendChild(d);
    });

    function showCategory(cat, products) {
      cDiv.style.display = "none";
      pDiv.innerHTML = "";
      btn.style.display = "block";

      products.forEach((item) => {
        const tonText = item.tonnage ? item.tonnage + " Ton" : "—";
        const d = document.createElement("div");
        d.className = "product-item";
        d.innerHTML = `
          <img src="${item.image}" alt="${item.name}" onerror="this.style.display='none';">
          <h4>${item.name}</h4>
          <p><strong>${tonText}</strong></p>
          <p>${item.description}</p>
        `;
        pDiv.appendChild(d);
      });

      pDiv.style.display = "grid";
    }

    btn.onclick = () => {
      pDiv.style.display = "none";
      cDiv.style.display = "grid";
      btn.style.display = "none";
      pDiv.innerHTML = "";
    };
  })
  .catch((error) => console.error("Error loading products:", error));
