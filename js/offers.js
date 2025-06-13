document.addEventListener("DOMContentLoaded", () => {
  const offersContainer = document.getElementById("offersContainer");
  offersContainer.innerHTML = "";

  fetch("data/offers.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((offers) => {
      offers.forEach((offer) => {
        const offerCard = document.createElement("div");
        offerCard.className = "offer-card";
        offerCard.innerHTML = `
          <h3 class="offer-title">${offer.title}</h3>
          <p class="offer-description">${offer.description.replace(
            /\n/g,
            "<br>"
          )}</p>
          <p class="offer-valid">Valid Till: ${offer.valid_till}</p>
        `;
        offersContainer.appendChild(offerCard);
      });
    })
    .catch((error) => {
      offersContainer.innerHTML =
        '<div class="error">Failed to load offers. Please try again later.</div>';
      console.error("Fetch error:", error);
    });
});
